/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandMint: '#72c5c4',
        brandPink: '#f978b1',
        pastelMint: '#e6f4f3',
        pastelPink: '#fff0f6',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        playlist: ['"Playlist Script"', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
