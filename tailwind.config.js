/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      BrightOrange: 'hsl(31, 77%, 52%)',
      DarkCyan: 'hsl(184, 100%, 22%)',
      VeryDarkCyan: 'hsl(179, 100%, 13%)',
      TransparentWhite: 'hsla(0, 0%, 100%, 0.75)',
      VeryLightGray: 'hsl(0, 0%, 95%)',
      white: '#fff'
    },
    fontFamily: {
      LexendDeca: ['Lexend Deca'],
      BigShouldersDisplay: ['Big Shoulders Display']
    },
    screens: {
      sm: '480px',
      md: '768',
      lg: '976px',
      xl: '1440px',
      mobile: '375px',
      desktop: '1440px'
    }
  },
  plugins: []
}
