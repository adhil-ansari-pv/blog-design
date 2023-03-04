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
  },
  plugins: [],
};
