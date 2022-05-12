import React from 'react'

import { HomeProps } from 'types/home'

import * as S from './styles'

const Home = ({ title }: HomeProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

Home.defaultProps = {
  title: 'Olá mundo!'
}

export default Home
