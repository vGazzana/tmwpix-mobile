/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FE7F00',
        'orange-dark': '#FE5200',
        red: '#ff3333',
        'red-dark': '#780000',
        white: '#f7f7f7',
        background: '#121214',
      },
    },
  },
  plugins: [],
};
