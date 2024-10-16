import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Reysin',
			customCss: [
				'./src/content/docs/styles/card.css',
			],
			social: {
				github: 'https://github.com/ReysinProject',
			},
			sidebar: [
				{
					label: 'Welcome here !',
					autogenerate: {
						directory: 'welcome'
					},
					badge: {
            text: 'WIP',
						variant: 'danger'
					}
				},
				{
					label: 'App Entrypoint',
					autogenerate: { directory: 'app_entrypoint' },
					badge: {
						text: 'WIP',
						variant: 'danger'
					}
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					badge: {
						text: 'WIP',
						variant: 'danger'
					}
				},
			],
		}),
	],
});
