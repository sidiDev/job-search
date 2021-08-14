const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./dashboard/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      teal: colors.teal,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      indigo: colors.indigo,
      cyan: colors.cyan,
      red: colors.red
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
