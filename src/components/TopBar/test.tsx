import { renderWithTheme } from 'utils/tests/helpers'

import TopBar from '.'

describe('<TopBar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TopBar />)
  })
})
