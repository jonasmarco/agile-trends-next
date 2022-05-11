import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'fullWidth'>

const wrapperSizeModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ fullWidth }) => css`
    cursor: pointer;
    height: 4rem;
    padding: 0 4.4rem;

    ${!!fullWidth && wrapperSizeModifiers.fullWidth()};
  `}
`
