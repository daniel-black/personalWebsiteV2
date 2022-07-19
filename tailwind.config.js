/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'hammer': 'hammer 1s linear infinite'
      },
      keyframes: {
        hammer: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(90deg)' },
        }
      },
      fontFamily: {
        jsans: ['JosefinSans', 'sans-serif'],
        jslab: ['JosefinSlab']
      }
    },
  },
  plugins: [],
}
