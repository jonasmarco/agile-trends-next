import React from 'react'

import * as S from './styles'

import { AccordionProps } from 'types/accordion'

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <S.AccordionTitle
        className={`${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </S.AccordionTitle>
      <S.AccordionItem className={`${!isOpen ? 'collapsed' : ''}`}>
        <S.AccordionContent>{children}</S.AccordionContent>
      </S.AccordionItem>
    </S.Wrapper>
  )
}

export default Accordion
