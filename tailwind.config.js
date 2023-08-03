/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    colors: {
      black: {
        800: '#181A1C',
      },
      blue: { 500: '#2E8AF6' },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        navbar: '0px 1px 0px 0px #323436 inset',
      },

      background: {
        createbtn: 'linear-gradient(90deg, #F62E8E 0%, #AC1AF0 100%)',
      },
    },
  },
  plugins: [],
}
