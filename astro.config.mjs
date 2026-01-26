// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
	},
	integrations: [
		starlight({
			title: 'BigBox Corner',
			logo: {
				src: './src/assets/bigbox_logo1.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/4lbertojordan/bigbox-corner' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Hardware',
					autogenerate: { directory: 'hardware' },
				},
			],
		}),
	],
});
