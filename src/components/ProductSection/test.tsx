import { render, screen } from '@testing-library/react'

import ProductSection from '.'

describe('<ProductSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProductSection />)

    expect(screen.getByRole('heading', { name: /ProductSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
