// @ts-check

import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kitapplegate.github.io',
	base: '/Kit-bashing/',
	integrations: [mdx(), sitemap()],
	vite: {
		resolve: {
			// Astro 7's content-sync runner evaluates picomatch's CommonJS entry
			// as ESM on Windows. Route it through Node's CommonJS bridge.
			alias: {
				picomatch: fileURLToPath(new URL('./src/picomatch-compat.mjs', import.meta.url)),
			},
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
