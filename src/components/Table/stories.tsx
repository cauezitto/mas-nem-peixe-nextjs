import { Story, Meta } from '@storybook/react/types-6-0'
import { Table, TableProps } from '.'

export default {
  title: 'Table',
  component: Table
} as Meta

export const Default: Story<TableProps> = (args) => <Table {...args} />
