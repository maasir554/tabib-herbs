/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {
      colors:{
        'primary': '#297345',
        'secondary': '#7DC11B',
        'tertiary': '#F3A333',
      },
    fontFamily:{
      "merriweather":["Merriweather", 'serif'],
    },
    },
  },
  plugins: [],
}

