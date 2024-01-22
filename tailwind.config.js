/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dune: {
          primary: "#000000",
          secondary: "#1e1e1e",
          textcolor: "#B6B6B6",
          accent: "#f58842"
        }
      }
    },

  },
  plugins: [],
}
