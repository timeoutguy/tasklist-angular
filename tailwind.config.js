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
      'secondary': '#FF8906',
      'card': '#353150',
      'white': '#FFFFFF',
      'blue-success': '#195186',
      'red': colors.red,
    },
    extend: {},
  },
  plugins: [],
}
