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
      screens:{
        sm:'480px',
        md:'769px',
        lg:'976px',
        xl:'1440px',
       },
      container:{
        padding:{
          sm:'2vw',
          md:'3vw',
          lg:'5vw',
          xl:'7vw',
        }
      }
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide')
  ],
}