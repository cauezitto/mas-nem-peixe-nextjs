import { Story, Meta } from '@storybook/react/types-6-0'
import Wrapper, { Props } from '.'

export default {
  title: 'Wrapper',
  component: Wrapper
} as Meta

export const Default: Story<Props> = (args) => <Wrapper {...args} />
