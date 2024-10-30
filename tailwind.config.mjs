/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lucuma: '#FFBD52',
        lila: '#7A1315',
        verde: '#345C2F',
        anaranjado: '#CB2128',
        plus: '#33576a',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
