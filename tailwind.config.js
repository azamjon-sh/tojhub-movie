/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "dark-blue": "#053BA3",
        "white": "#ffffff",
        "gray-1": "#DFDFDF",
        "black": "#0A0A0A",
        "blue": "#0069F2",
        "gray": "#627286",
        "green": "#0FB90F",
        "green-1": "#00A000",
        "red": "#F42D2D",
      },
    }
  },
  plugins: [],
}

