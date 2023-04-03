/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors:{
        '--primary-color': '#026467',
        '--secondary-color': '#e5f5ea',
        '--body-text-color': '#596392',
        '--navbar-footer-color':' #f9f9f9',
      }
    },
    container:{
      center:true,
      padding:'1rem',
      screens:{
        'sm':"512px",
        'md':"720px",
        'lg':"1024px",
        'xl':"1140px",
        '2xl':"1320px",
      }
    },
    boxShadow:{
      '5xl':'20px 20px 50px rgba(0,0,0,0.5)'
    },

  },
  plugins: [],
};
