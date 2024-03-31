/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-grey': '#1F2937',
        'dark-grey': '#111827',
        'dark-purple': '#9333EA',
        'light-purple': '#D8B4FE',
        'testimonial-bg': '#374151',
        'grey-text': '#9CA3AF'

      },
      fontFamily: {
        'poppin': 'poppins'
      },




    }
  },

  plugins: []
}