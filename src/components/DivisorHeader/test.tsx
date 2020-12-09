import { render, screen } from '@testing-library/react'

import DivisorHeader from '.'

describe('<DivisorHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<DivisorHeader />)

    expect(screen.getByRole('heading', { name: /DivisorHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
