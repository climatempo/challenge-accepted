/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'rgb(0,128,205)',
        'secondary-blue': 'rgb(0,73,131)',
      },
    },
  },
  plugins: [],
};
