/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{ts,tsx,js,jsx}`,
    `./src/components/**/*.{ts,tsx,js,jsx}`
],
  theme: {
    extend: {
      colors: {
        'border-gray': '#9D9D9D',
      },
    }
  },
  plugins: [],
}
