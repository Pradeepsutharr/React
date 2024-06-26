/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
    container: {
      screens: {
        sm: '600px',
        md: '700px',
        lg: '984px',
        xl: '1120px',
        '2xl': '1320px',
      },
      padding: '1rem',
    },
  },
  plugins: [],
  darkMode: "class",
}


// screens: {
//   sm: '600px',
//   md: '720px',
//   lg: '984px',
//   xl: '1220px',
//   '2xl': '1456px',
// },
