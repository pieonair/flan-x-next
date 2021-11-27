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
        'mainTwo': "url('~/styles/img/MainPage/SecondSection/SecondSection-Part1.jpg')",
        'mainThree': "url('~/styles/img/MainPage/SecondSection/secondsection-part2.jpg')",
        'mainFour': "url('~/styles/img/MainPage/SecondSection/SecondSection-Part3.jpg')",
        'mainTwoBg': "url('~/styles/img/MainPage/SecondSection/SecondSectionBackground.jpg')",
        'mainJoinUs': "url('~/styles/img/MainPage/JoinUsSection/JoinUsV1.jpg')",
        'logo': "url('~/styles/img/flan_logo.jpg')",
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
