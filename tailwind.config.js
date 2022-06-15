module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#7A7A7A',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
