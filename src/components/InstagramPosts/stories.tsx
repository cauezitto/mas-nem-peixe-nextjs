import { Story, Meta } from '@storybook/react/types-6-0'
import InstagramPosts from '.'

export default {
  title: 'InstagramPosts',
  component: InstagramPosts
} as Meta

export const Default: Story = () => <InstagramPosts />
