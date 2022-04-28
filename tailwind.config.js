module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6EC1E4',
        secondary: '#7A7A7A',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
