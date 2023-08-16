/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
          main: '#2a3447',
          soft: '#384256',
          dark: '#222b3c',
          maintxt: 'white',
          softtxt: '#ddd',
          darktxt: '#2a3447',
          modal :'rgba(0,0,0,0.725)',
          tomato :'#f45b69'
      },
      gridAutoRows: {
        '180': 'minmax(180px, auto)',
      }
    },
  },
  plugins: [],
}