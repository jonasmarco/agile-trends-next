import styled, { css } from 'styled-components'

import { slideUpDown } from 'styles/animations'

export const Container = styled.main`
  display: flex;
`
export const ChartBox = styled.div`
  width: 80%;
`

export const MenuBox = styled.div`
  ${({ theme }) => css`
    animation: ${slideUpDown} 750ms ease-in-out;
    background-color: ${theme.colors.lightGray};
    min-height: calc(100vh - 6rem);
    padding: 3rem;
    width: 20%;
  `}
`
