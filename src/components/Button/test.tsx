import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(<Button>Simular agora</Button>)

    expect(screen.getByRole('button', { name: /Simular agora/i })).toHaveStyle({
      height: '4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Simular agora</Button>)

    expect(screen.getByRole('button', { name: /Simular agora/i })).toHaveStyle({
      width: '100%'
    })
  })
})
