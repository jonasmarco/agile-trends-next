import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, fullWidth = false, ...props }: ButtonProps) => (
  <S.Wrapper fullWidth={fullWidth} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
