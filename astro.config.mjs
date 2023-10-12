import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';


const env = loadEnv("", process.cwd(), 'STORYBLOK');
// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        blogPost: 'storyblok/BlogPost',
      },
      apiOptions: {
        region: 'eu',
      },
    })
  ],
});
