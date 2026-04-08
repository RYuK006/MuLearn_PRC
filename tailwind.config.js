/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          900: '#111111',
          800: '#222222',
          300: '#CCCCCC',
        }
      }
    }
  },
  plugins: [],
}
