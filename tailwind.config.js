/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        padding:{
          sm:'2vw',
          md:'4vw',
          lg:'6vw',
          xl:'8vw',
        }
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}