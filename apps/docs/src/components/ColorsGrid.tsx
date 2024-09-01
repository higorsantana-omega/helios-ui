// eslint-disable-next-line no-unused-vars
import { ColorItem, ColorPalette } from '@storybook/blocks'
import { colors } from '@helios-ui/tokens'

export function ColorsGrid() {
  const colorsItem = Object.entries(colors).map(([name, value]) => {
    return (
      <ColorItem key={name} title={name} subtitle={value} colors={{ default: value }} />
    )
  })

  return (
    <ColorPalette>
      {colorsItem}
    </ColorPalette>
  )
}
