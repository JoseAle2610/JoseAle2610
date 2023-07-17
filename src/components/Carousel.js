import { useState } from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`

const CarouselItems = styled.div`
  display: flex;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
`
const CarouselItem = styled.div`
  background-color: #eee;
  width: 32.5%;
  flex: 1 0 auto;
`
const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 2px ;
  background-color: black;
  color: white;
  cursor: pointer;
  ${props => props.left && `left: -25px;`}
  ${props => props.right && `right: -25px;`}
`

const Carousel = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem(currentItem === 0 ? children.length - 3 : currentItem - 1);
  };

  const handleNext = () => {
    setCurrentItem(currentItem === children.length - 3 ? 0 : currentItem + 1);
  };

  return (
    <div style={{position: 'relative'}}>
      <CarouselContainer className='carousel'>
        <CarouselItems style={{transform: `translateX(-${currentItem * 33.33}%)`}}>
          {children.map((child, index) => (
            <CarouselItem key={index}>
              {child}
            </CarouselItem>
          ))}
        </CarouselItems>
        <CarouselButton onClick={handlePrev} left={"true"}>&lt;</CarouselButton>
        <CarouselButton onClick={handleNext} right={"true"}>&gt;</CarouselButton>
      </CarouselContainer>
    </div>
  );
};

export default Carousel;