import { Story, Meta } from '@storybook/react/types-6-0'
import Product, { Props } from '.'

export default {
  title: 'Product',
  component: Product
} as Meta

export const Default: Story<Props> = (args) => <Product {...args} />
