const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#800000',
        gold: '#FFD700',
        ivory: '#FFFFF0',
        blush: '#FFC0CB',
        navy: '#000080',
        lavender: '#E6E6FA',
        emerald: '#50C878',
        charcoal: '#36454F',
        lightgray: '#D3D3D3',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

