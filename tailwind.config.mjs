const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      padding: {
        layout: '100px',
        'layout-mobile': '25px',
      },
    },
  },
  plugins: [],
}
