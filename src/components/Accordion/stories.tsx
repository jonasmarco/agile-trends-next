import { Story, Meta } from '@storybook/react/types-6-0'
import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
} as Meta

export const Default: Story = () => <Accordion title="Teste">Teste</Accordion>
