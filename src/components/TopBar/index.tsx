import * as S from './styles'

const TopBar = () => (
  <S.Wrapper>
    <S.Title>
      <b>AGILE</b>TRENDS
    </S.Title>
    <S.SelectChart>
      <option value="grafico01">Gráfico 01</option>
      <option value="grafico02">Gráfico 02</option>
    </S.SelectChart>
    <S.ActionButtons>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </S.ActionButtons>
  </S.Wrapper>
)

export default TopBar
