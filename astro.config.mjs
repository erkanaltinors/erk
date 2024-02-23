import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
 trailingSlash: "never",
 redirects: {
  "/partials": "/",
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
  react(),
  icon({
   include: {
    ph: ["arrow-up-right"],
   },
  }),
 ],
 build: {
  format: "file",
 },
});
