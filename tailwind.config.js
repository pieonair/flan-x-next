const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'button-blue': '#3FC0FC',
        'flan-purple': '#1B208D'
      }
    },
    fontFamily: {
      'sans': ['"Visby CF'],
      'serif': ['"Visby CF'],
      'display': ['"Visby CF'],
      'body': ['"Visby CF']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
