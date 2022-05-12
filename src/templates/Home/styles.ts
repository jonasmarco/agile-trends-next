import styled, { css } from 'styled-components'

export const Container = styled.main`
  display: flex;
`
export const ChartBox = styled.div`
  width: 80%;
`

export const MenuBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    min-height: calc(100vh - 6rem);
    padding: 3rem;
    width: 20%;
  `}
`
