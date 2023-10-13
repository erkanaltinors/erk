import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';


const env = loadEnv("", process.cwd(), 'STORYBLOK');
// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["api.storyblok.com"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        blogPost: 'storyblok/blogPost',
      },
      apiOptions: {
        region: 'eu',
      },
    })
  ],
});
