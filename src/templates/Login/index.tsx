import React from 'react'

import { LoginProps } from 'types/login'

import * as S from './styles'

const Login = ({ title }: LoginProps) => {
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  )
}

Login.defaultProps = {
  title: 'Olá mundo!'
}

export default Login
