const flowbite = require('flowbite-react/tailwind');

/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Montserrat','ui-sans-serif','system-ui']
      },
      colors: {
        ivor: {
          '50': '#f3faf9',
          '100': '#d7f0ee',
          '200': '#a3d6d0',
          '300': '#7ecac8',
          '400': '#49b7b4',
          '500': '#368789',
          '600': '#2b6d72',
          '700': '#1a4242',
          '800': '#23494c',
          '900': '#1f2828',
          '950': '#0e2225',
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
