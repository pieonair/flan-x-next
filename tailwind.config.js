const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        'button-blue': '#3FC0FC',
        'flan-purple': '#1B208D'
      },
      backgroundImage: (theme) => ({
        'mainOne': "url('~/styles/img/MainPage/HeroSection/HeroV1.jpg')",
      })
    },
    fontFamily: {
      sans: ["VisbyCFMedium"],
      serif: ["VisbyCFMedium"],
      mono: ["VisbyCFMedium"],
      display: ["VisbyCFMedium"],
      body: ["VisbyCFMedium"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
