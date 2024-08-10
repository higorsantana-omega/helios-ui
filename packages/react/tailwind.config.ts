import type { Config } from 'tailwindcss'

import { colors, fontSizes, fontWeights } from '@helios-ui/tokens'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: fontSizes,
      fontWeight: fontWeights
    }
  },
  plugins: [],
} satisfies Config
