const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'mint-green': '#BEE9E8',
      'moonstone': '#62B6CB',
      'indigo-dye': '#1B4965',
      'columbia-blue': '#CAE9FF',
      'picton-blue': '#5FA8D3',
      'alice-blue': '#EBF7FF'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
