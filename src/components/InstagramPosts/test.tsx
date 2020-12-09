import { render, screen } from '@testing-library/react'

import InstagramPosts from '.'

describe('<InstagramPosts />', () => {
  it('should render the heading', () => {
    const { container } = render(<InstagramPosts />)

    expect(screen.getByRole('heading', { name: /InstagramPosts/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
