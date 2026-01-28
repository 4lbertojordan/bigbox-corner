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
			customCss: ['./src/styles/starlight.css'],
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
					label: 'Videojuegos',
					autogenerate: { directory: 'videojuegos' },
				},
				{
					label: 'Hardware',
					autogenerate: { directory: 'hardware' },
				},
			],
		}),
	],
});
