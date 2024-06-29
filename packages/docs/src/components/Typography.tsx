// eslint-disable-next-line no-unused-vars
import { Typeset } from '@storybook/blocks'
import { fontSizes } from '@helios-ui/tokens'

export function Typography() {
  return (
    <Typeset
      fontSizes={Object.entries(fontSizes).map(([, value]) => value)}
      fontFamily="Public Sans"
    />
  )
}
