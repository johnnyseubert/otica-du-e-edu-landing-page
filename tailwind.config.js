/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8ff',
          100: '#e6f1ff',
          200: '#c5dcff',
          300: '#a4c7ff',
          400: '#6c9eff',
          500: '#3365e7',
          600: '#254dc1',
          700: '#1d3d9b',
          800: '#17317d',
          900: '#132966'
        }
      }
    }
  },
  plugins: []
};
