/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'sans-serif'], // Fallback to sans-serif
        raleway: ['Raleway', 'sans-serif'], // Fallback to sans-serif
      },
    },
  },
  plugins: [],
};
