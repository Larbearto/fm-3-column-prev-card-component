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
      white: '#fff',
      StrongCyan: '#26C0AB',
      VeryDarkCyan: '#00494D',
      DirtyGreen: '#5E7A7D',
      MuddyGreen: '#7F9C9F',
      SoftGreen: '#C5E4E7',
      SuperLightGray: '#F4FAFA',
      Whitish: '#ecf0f3',
      Navyish: '#1f2937',
      PastelPurple: '#5651e5',
      PastelBlue: '#709dff',
      GlossyWhite: '#ecf0f3',
      TwitterGray: '#6e767d',
      Platinum: '#E8E8E8',
      MatteBlack: '#171717',
      ChalkyBlack: '#333333',
      Charcoal: '#36454F',
      DarkGreen: '#023020',
      DarkPurple: '#301934',
      JetBlack: '#343434',
      Licorice: '#1B1212',
      MatteBlacky: '#28282B',
      MidnightBlue: '#191970',
      TwitterBlue: '#1d9bf0',
      Onyx: '#353935',
      MatteAqua: '#99D1D5',
      MatteBeigeKhaki: '#AA9C70',
      MatteBlack: '#171717',
      MatteGray: '#757574',
      MatteGrayCharcoal: '#35383B',
      MatteGrey: '#B4A8A4',
      MatteGreyDark: '#545454',
      MatteGreySolid: '#B4A8A4'
    },
    fontFamily: {
      LexendDeca: ['Lexend Deca'],
      BigShouldersDisplay: ['Big-Shoulders-Display']
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
