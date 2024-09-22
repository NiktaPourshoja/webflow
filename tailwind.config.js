/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html" ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      }
    },
    screens: {
      'mobile' : '340px',
      'tab' : '858px',
      'desk' : '1024px',
    },
    colors:{
      yellow1:'#fcd980'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
