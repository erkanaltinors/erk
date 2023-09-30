/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{astro,html,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '10px',
        sm: '15px',
        md: '20px',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: "#efefef"
      },
      fontFamily:{
        sans: ['Jura','ui-sans-serif', 'system-ui']
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in":{
          from: {opacity: 0},
          to: {opacity: 1}
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}