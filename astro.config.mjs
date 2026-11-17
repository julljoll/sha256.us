// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Sistema de Diseño Exclusivo: U.S. Web Design System (USWDS 3.14) — Sin Tailwind CSS
export default defineConfig({
	site: 'https://sha256.us',
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.8,
			lastmod: new Date(),
			customPages: [
				'https://sha256.us/',
				'https://sha256.us/servicios/',
				'https://sha256.us/normativa/',
				'https://sha256.us/about/',
				'https://sha256.us/blog/',
				'https://sha256.us/contacto/',
			],
			serialize(item) {
				if (item.url === 'https://sha256.us/') {
					item.changefreq = 'daily';
					item.priority = 1.0;
				} else if (item.url.includes('/servicios/') || item.url.includes('/normativa/')) {
					item.changefreq = 'weekly';
					item.priority = 0.9;
				} else if (item.url.includes('/blog/')) {
					item.changefreq = 'weekly';
					item.priority = 0.85;
				}
				return item;
			},
		}),
	],
});
