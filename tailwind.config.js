/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#302CA2',
      'primary-100': 'rgba(48, 44, 162, 0.08)',
      'primary-300': 'rgba(48, 44, 162, 0.3)',
      'primary-accent': '#23104E',
      'secondary': '#26A37C',
      'txt-black': '#032326',
      'divider-gray': '#B7AECA',
      'foreGround': '#FFFFFF',
      'starOn': '#FFE621',
      'starOff': '#EAEAEA',
      'background': '#F6F6F6' 
    },
    extend: {
      fontFamily:{
        'cairo': ['Cairo', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

