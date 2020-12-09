import { render, screen } from '@testing-library/react'

import Newsletter from '.'

describe('<Newsletter />', () => {
  it('should render the heading', () => {
    const { container } = render(<Newsletter />)

    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
