module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'transparent': 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',
      'primary': '#75D1F7',
      'secondry': '#3685cf',
      'orangered': '#ff4500'
    },
    extend: {
      width: {
        '1/2': '50.00%',
        '1/3': '33.33%',
        '2/3': '66.67%',
        '1/4': '25.00%',
        '3/4': '75.00%',
        '70': '65rem'
      },
      height: {
        '1/2': '50.00%',
        '1/3': '33.33%',
        '2/3': '66.67%',
        '1/4': '25.00%',
        '3/4': '75.00%',
        '40': '38rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
