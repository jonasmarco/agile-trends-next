import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.gray};
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 3rem;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    line-height: 5rem;
    text-transform: uppercase;
  `}
`

export const SelectChart = styled.select``

export const ActionButtons = styled.div``
