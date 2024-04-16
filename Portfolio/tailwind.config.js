/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF5C00',
        'secondary': '#1D1C1D',
      },
      fontFamily: {
        'Poppin': 'Poppins , sans-serif',
      },
    },
  },
  plugins: [],
}

