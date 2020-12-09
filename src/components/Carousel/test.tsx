import { render, screen } from '@testing-library/react'

import Carousel from '.'

describe('<Carousel />', () => {
  it('should render the heading', () => {
    const { container } = render(<Carousel />)

    expect(
      screen.getByRole('heading', { name: /Carousel/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
