/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone': {'min':'270px', 'max':'600px'},
        'tablet':{'min':'600px', 'max':'915px'},
        'laptop': {'min':'917px'}
      },
      fontFamily:{
        'pacifico':['pacifico','sans-serif'],
        'poppins':['poppins','serif'],
        'geologica':['geologica','sans-serif'],
      }
    },
  },
  plugins: [],
}