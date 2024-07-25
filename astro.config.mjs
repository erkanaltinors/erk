import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://erkanaltinors.com",
	trailingSlash: "never",
	markdown: {
		shikiConfig: {
			wrap: true,
			theme: "dark-plus",
		},
	},
	image: {
		remotePatterns: [
			{
				protocol: "https",
			},
		],
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		icon({
			include: {
				ph: ["arrow-up-right", "warehouse"],
			},
		}),
		sitemap(),
	],
	build: {
		format: "file",
	},
});
