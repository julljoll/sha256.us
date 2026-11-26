// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Sistema de Diseño Exclusivo: U.S. Web Design System (USWDS 3.14) — Sin Tailwind CSS
export default defineConfig({
	site: 'https://sha256.us',
	trailingSlash: 'always',
	build: {
		format: 'directory',
	},
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.8,
			lastmod: new Date(),
			filter: (page) =>
				!page.includes('/404') &&
				!page.includes('/servicios') &&
				!page.includes('/normativa') &&
				!page.includes('/about') &&
				!page.includes('/contacto'),
			serialize(item) {
				if (item.url === 'https://sha256.us/') {
					item.changefreq = 'daily';
					item.priority = 1.0;
				} else if (item.url.includes('/blog/')) {
					item.changefreq = 'weekly';
					item.priority = 0.85;
				}
				return item;
			},
		}),
	],
});
