import React from 'react'

import Accordion from 'components/Accordion'

import * as S from './styles'
import Link from 'next/link'

const Home = () => {
  return (
    <S.Container>
      <S.ChartBox></S.ChartBox>
      <S.MenuBox>
        <Accordion title="Control 1">
          <Link href="/">Backlog</Link>
          <Link href="/">Analysis Active</Link>
          <Link href="/">Analysis Done</Link>
          <Link href="/">Teting</Link>
        </Accordion>
        <Accordion title="Control 1">
          <Link href="/">Backlog</Link>
          <Link href="/">Analysis Active</Link>
          <Link href="/">Analysis Done</Link>
          <Link href="/">Teting</Link>
        </Accordion>
        <Accordion title="Control 1">
          <Link href="/">Backlog</Link>
          <Link href="/">Analysis Active</Link>
          <Link href="/">Analysis Done</Link>
          <Link href="/">Teting</Link>
        </Accordion>
      </S.MenuBox>
    </S.Container>
  )
}

export default Home
