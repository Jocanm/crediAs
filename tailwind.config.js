/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d70b52',
          light: '#d70b5299',
        },
        secondary: {
          DEFAULT: '#2c338b',
          light: '#2c338b99',
        }
      }
    },
  },
  plugins: [],
}