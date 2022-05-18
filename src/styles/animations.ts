import { keyframes } from 'styled-components'

export const slideUpDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideRightLeft = keyframes`
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0);
  }
`
