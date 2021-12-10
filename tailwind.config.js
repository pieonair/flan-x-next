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
        'mainOne': "url('~/styles/img/MainPage/Main1.jpg')",
        'mainTwo': "url('~/styles/img/MainPage/FindFreelancers.jpg')",
        'mainThree': "url('~/styles/img/MainPage/CheckPlatforms.jpg')",
        'mainFour': "url('~/styles/img/MainPage/VerifyFreelancers.jpg')",
        'mainJoinUs': "url('~/styles/img/MainPage/Be_The_First_To_Join_Us-1.jpg')",
        'whiteLogo': "url('~/styles/img/FlanFullLogo.png')",
        'logo':"url('~/styles/img/flan_logo.jpg')",
        'loginPage':"url('~/styles/img/LoginBackgroundHighlights.jpg')",
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
