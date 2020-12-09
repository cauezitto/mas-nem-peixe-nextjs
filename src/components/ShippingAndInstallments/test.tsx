import { render, screen } from '@testing-library/react'

import ShippingAndInstallments from '.'

describe('<ShippingAndInstallments />', () => {
  it('should render the heading', () => {
    const { container } = render(<ShippingAndInstallments />)

    expect(screen.getByRole('heading', { name: /ShippingAndInstallments/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
