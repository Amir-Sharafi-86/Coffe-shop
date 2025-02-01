/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    extend: {
      
      colors  :{
        "brown" : "#4F2C19"
      },
      backgroundColor:{
        "brown" :  "#E2DFD5"
      },
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemibold" : "Dana Demibold",
      },
      container  : {
        center : true,
        padding : {
        DEFAULT : "1rem",
        }
    }
    },
  },
  plugins: [],
}

