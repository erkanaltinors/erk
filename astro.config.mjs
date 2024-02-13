import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
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
