/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'main-lighter': '#1C1B2C',
      'main-darker': '#0F0E17',
      'text': '#A7A9BE',
      'secondary': {
        DEFAULT: '#FF8906',
        '50': '#FFE0BE',
        '100': '#FFD6A9',
        '200': '#FFC380',
        '300': '#FFB058',
        '400': '#FF9C2F',
        '500': '#FF8906',
        '600': '#CD6C00',
        '700': '#954E00',
        '800': '#5D3100',
        '900': '#251300'
      },
      'card': '#353150',
      'white': '#FFFFFF',
      'blue-success': '#195186',
      'red': colors.red,
    },
    extend: {},
  },
  plugins: [],
}
