import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { Props } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<Props> = (args) => <Button {...args} />
