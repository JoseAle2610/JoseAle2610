import { keyframes } from "styled-components"

export const slideLeftAnimation = keyframes`
  0% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
`
export const slideTopAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const slideBottomAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
export const BlinkAnimation = keyframes`
  to {
    color: transparent;
  }
`