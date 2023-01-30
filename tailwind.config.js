/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        buttonShop:"#F4B840",
        banner:"#F4F4F4",
        text1:"#F4B840",
        solidBor1:"solid #ffff",
        icon:"#F4B840",
      },

      outlineOffset: {
        3: '3px',
      },
      
      lineHeight:{
        lineMedium:"54px"
      }
    },
    fontFamily: {
      fontPoppins: "fontFamily:'Poppins'",
      fontPoppins:['poppins'],
  
    },
 
  },
  plugins: [],
}