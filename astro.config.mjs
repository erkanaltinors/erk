import icon from "astro-icon";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

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
		icon({
			include: {
				ph: ["arrow-up-right"],
				flag: ["*"],
			},
		}),
		react(),
		sitemap({
			filter: (page) => page !== "https://erkanaltinors.com/araclar/dosyala",
		}),
	],

	build: {
		format: "file",
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
