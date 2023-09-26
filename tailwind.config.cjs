/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#FFD400',
      secondary: '#6F5F5E',
      white: '#FFFFFF',
      black: '#000000',
      red: '#E60000',
    },
    extend: {},
  },
  plugins: [],
}
