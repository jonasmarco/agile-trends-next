import { renderWithTheme } from 'utils/tests/helpers'

import Accordion from '.'

describe('<Accordion />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Accordion title="Teste">
        <p>Teste</p>
      </Accordion>
    )
  })
})
