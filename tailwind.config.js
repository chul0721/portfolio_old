module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      paddingBottom: {
        '1/2': '50%'
      },
      colors: {
        memo: '#fff740'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
