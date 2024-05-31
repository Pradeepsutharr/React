/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: '600px',
        md: '700px',
        lg: '984px',
        xl: '1120px',
        '2xl': '1370px',
      },
      padding: '1rem',
    },
  },

  plugins: [],
}

