import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { Props } from '.'

export default {
  title: 'Heading',
  component: Heading
} as Meta

export const Default: Story<Props> = (args) => <Heading {...args} />

Default.args = {
  children: 'Aproveite e compre junto'
}
