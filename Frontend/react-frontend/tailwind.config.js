/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      DM_Sans: ['DM Sans','sans-serif'],
      pacifico: ['Pacifico', 'cursive']
    },},
  },
  plugins: [],
}
