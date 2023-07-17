import {useState, useEffect, useRef} from 'react'
import styled, {keyframes} from 'styled-components'
import background from '@/assets/background.jpg' 
import Container from '@/components/Container'
import {FullContainerBackground} from '@/components/FullContainer'
import info from '@/config'
import { ListSocial, Social } from './Contact'

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

const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`
const slideTopAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const HomeContainer = styled.main`
	animation: ${slideLeftAnimation} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  a {
    animation: ${slideTopAnimation} 0.5s ease both;
  }
  ${props => {
    let css = ''
    for (let index = 0; index < props.aChilds; index++) {
      css += `
        a:nth-child(${index+1}){
          animation-delay: ${index / 2}s;
        }
      `
    }
    return css
  }}
`

export const Home = () => {
  const words = info.typeWrite
  const containerRef = useRef();

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [writeFinish, setWriteFinish] = useState(false);


  // typeWriter
  useEffect(() => {
    const container = containerRef.current

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / container.offsetWidth) * 10;
      const y = (clientY / container.offsetHeight) * 10;
      container.style.backgroundPosition = `bottom ${x+29}% left ${y}%`;
    }
    container.addEventListener('mousemove', handleMouseMove);

    if(index === words.length){
      setWriteFinish(true)
      return
    }

    if(subIndex === words[index].length - 1){
      setIndex(prev => prev +1)
      setSubIndex(0)
    }
    const timeOutWriter = setTimeout(() => {
      setSubIndex(prev => prev + 1)
    }, 100);

    return () => {
      clearTimeout(timeOutWriter)
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [subIndex, index, words, containerRef]);
 
  return (
    <FullContainerBackground src={background} ref={containerRef}>
      <Container>
        <HomeContainer aChilds={info.social.length}>
          <h1>{info.greeting}<br/>
            {words.map((line, i) => <div key={i}>
              {(i === index || i === words.length) && <>
                {line.substring(0,subIndex)}<Blink>|</Blink></>
              }
              {i < index && line}
              {(index === words.length && index === i+1)  && <Blink>|</Blink>}
            </div>)}
          </h1>
          <ListSocial style={{display: !writeFinish && 'none'}}>
            {info.social.map((elem, index) => (
              <Social key={index} link={elem.link} icon={elem.icon} tooltip={elem.label} transparent />
            ))}
          </ListSocial>
        </HomeContainer>
      </Container>
    </FullContainerBackground>
  )
}
