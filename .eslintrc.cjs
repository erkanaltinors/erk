/** @type {import("eslint").Linter.Config} */
module.exports = {
 plugins: ["@typescript-eslint", "astro"],
 extends: ["plugin:astro/recommended", "plugin:@typescript-eslint/recommended"],
 parser: "@typescript-eslint/parser",
 parserOptions: {
  tsconfigRootDir: __dirname,
  sourceType: "module",
  ecmaVersion: "latest",
 },
 overrides: [
  {
   files: ["*.astro"],
   parser: "astro-eslint-parser",
   parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
   },
   rules: {
    "no-unused-vars": "error",
    "no-console": "warn",
    "no-var": "error",
    "no-duplicate-imports": "error",
   },
  },
  {
   files: ["*.tsx"],
   parserOptions: {
    parser: "@typescript-eslint/parser",
   },
   rules: {
    "no-console": "warn",
   },
  },
 ],
};
