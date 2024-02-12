/** @type {import("prettier").Config} */
module.exports = {
 tabWidth: 1,
 printWidth: 150,
 htmlWhitespaceSensitivity: "ignore",
 pluginSearchDirs: [__dirname],
 plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-tailwindcss")],
 tailwindConfig: "./tailwind.config.mjs",
 overrides: [
  {
   files: "*.astro",
   options: {
    parser: "astro",
   },
  },
  {
   files: ["**/*.tsx", "*.tsx"],
   options: {
    parser: "typescript",
   },
  },
 ],
};
