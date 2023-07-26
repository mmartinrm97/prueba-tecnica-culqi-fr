/** @type {import('tailwindcss').Config} */

// export default {
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['Manrope', 'sans-serif']
      },
      colors:{
        primary: '#00A19B',
        secondary: '#111827',
        success:'#0CAF60'
      }
    },
  },
  plugins: [],
}

