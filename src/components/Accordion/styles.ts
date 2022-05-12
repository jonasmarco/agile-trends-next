import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  & + * {
    margin-top: 2em;
  }
`

export const AccordionTitle = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.darkGray};
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
    border: 1px solid ${theme.colors.darkGray};
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: space-between;
    padding: 0.5em 1.5em;

    &::after {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid currentColor;
      content: '';
      height: 0;
      width: 0;
    }

    &.open {
      &::after {
        border-bottom: 5px solid;
        border-top: 0;
        content: '';
      }
    }
  `}
`

export const AccordionItem = styled.div`
  height: auto;
  max-height: 9999px;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);

  &.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }
`

export const AccordionContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    padding: 1em 1.5em;
    > * {
      color: ${theme.colors.black};
      display: block;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
