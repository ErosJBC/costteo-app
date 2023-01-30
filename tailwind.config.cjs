/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-custom": "#ED7D31",
        "blue-custom": "#4472C4",
        "green-custom": "#70AD47",
      }
    },
  },
  plugins: [],
  important: true,
};
