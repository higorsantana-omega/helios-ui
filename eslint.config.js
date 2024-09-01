import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: {
    markdown: true,
    css: true,
    html: true,
  },
  typescript: true,
})
