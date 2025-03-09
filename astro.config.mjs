import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
	site: "https://erkanaltinors.com",
	trailingSlash: "never",
	markdown: {
		shikiConfig: {
			wrap: true,
			theme: "dark-plus",
		},
		remarkPlugins: [remarkModifiedTime],
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
				ph: ["arrow-up-right"],
			},
		}),
		sitemap(),
	],
	build: {
		format: "file",
	},
});
