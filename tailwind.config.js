/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        highBlack: '#000',
        highWhite: '#fff',
        highBrown: '#895737',
        lightBrown: '#DAB49D',
        galleryBrown: '#bfc9ca',
        lowBlack: '#1b1b1b',
        lowWhite: '#f1f1f1',
        blackBacground: '#131312'
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
