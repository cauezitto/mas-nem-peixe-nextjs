import { Story, Meta } from '@storybook/react/types-6-0'
import DivisorHeader, { Props } from '.'

export default {
  title: 'DivisorHeader',
  component: DivisorHeader
} as Meta

export const Default: Story<Props> = (args) => <DivisorHeader {...args} />

Default.args = {
  children: 'SIGA NOSSO INSTAGRAM'
}
