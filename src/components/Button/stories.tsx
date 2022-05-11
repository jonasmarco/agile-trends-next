import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    fullWidth: {
      type: 'boolean'
    }
  }
} as Meta

export const Basic: Story = (args) => <Button {...args} />

Basic.args = {
  children: 'Simular agora'
}
