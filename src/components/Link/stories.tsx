import { Story, Meta } from '@storybook/react/types-6-0'
import Link, { Props } from '.'

export default {
  title: 'Link',
  component: Link
} as Meta

export const Default: Story<Props> = (args) => <Link {...args} />
