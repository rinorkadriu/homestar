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
        lightBrown: '#DAB49D'
      }
    },
  },
  plugins: [],
}
