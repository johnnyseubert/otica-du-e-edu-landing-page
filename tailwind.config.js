/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#dfe9ff',
          200: '#bcd1ff',
          300: '#8aaeff',
          400: '#5b8bff',
          500: '#2f5fea',
          600: '#2049c7',
          700: '#1b3aa0',
          800: '#1a3181',
          900: '#182b6a'
        }
      },
      fontFamily: {
        display: ['"Work Sans"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
