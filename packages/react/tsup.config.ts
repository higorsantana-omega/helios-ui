import { defineConfig } from 'tsup'

export default defineConfig({
	entry: [
		'src/**/*.{ts,tsx}',
    'src/styles/index.css',
		'tailwind.config.ts'
	],
	minify: true,
	sourcemap: false,
	outDir: 'dist',
	clean: true,
	format: ['cjs', 'esm'],
	dts: true,
  external: ['react'],
  tsconfig: 'tsconfig.build.json'
})