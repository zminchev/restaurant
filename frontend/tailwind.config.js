/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins','sans-serif'],
    },
    extend: {
      lineHeight:{
        '19': '4.75rem',
      },
      colors: {
        primary: {
          orange: '#FC8019',
          grey: '#808080',
          white: '#F8F8F8',
          black: '#202020'
        },
      }
    },
  },
  plugins: [],
}
