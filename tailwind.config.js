module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1.5s'
      },
      backgroundImage: {
        'hero': "url('https://cdn.pixabay.com/photo/2020/05/12/17/04/man-5163992_960_720.jpg')",
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
