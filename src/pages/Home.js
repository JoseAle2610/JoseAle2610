import {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import background from 'shared/background.jpg' 
import Container from 'shared/Container'
import {FullContainerBackground} from 'components/FullContainer'
import {useInfo} from 'context'

const BlinkAnimation = keyframes`
  to {
    color: transparent;
  }
`

const Blink = styled.span`
  animation-name: ${BlinkAnimation};
  animation-duration: .9s;
  animation-iteration-count: infinite;
`

export const Home = () => {
  const info = useInfo()
  const words = info.typeWrite
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (
      index === words.length - 1 && 
      subIndex === 0 &&
      reverse
    ) {
      setIndex(0)
      setReverse(false);
      return;
    }

    if (
      subIndex === words[index].length + 1 && 
      !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);
 
  return (
    <FullContainerBackground src={background}>
      <Container onClick={() => console.log(info)}>
        <h1>{info.greeting}<br/>
          {`${words[index].substring(0, subIndex)}`}<Blink>|</Blink>
        </h1>
      </Container>
    </FullContainerBackground>
  )
}
