import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
 trailingSlash: "never",
 image: {
  remotePatterns: [{ protocol: "https" }],
 },
 integrations: [
  tailwind({
   applyBaseStyles: false,
  }),
  react(),
 ],
});
