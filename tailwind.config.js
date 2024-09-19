/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iosBlue: '#007AFF',
        primaryTitle: '#1D1D1F',
      }
    },
  },
  plugins: [],
}

