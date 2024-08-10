import type { Meta } from '@storybook/react'
import { Button } from '@helios-ui/react'

const meta = {
  title: 'Button',
  component: Button,
  args: { children: 'Click' },
} satisfies Meta<typeof Button>

export default meta

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
}
