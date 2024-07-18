/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        katibeh: ["Katibeh", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        "primary-light": "#EFEFEF",
        "secondary-light": "#8F5E10",
        "primary-dark": "#1E1E1E",
        "secondary-dark": "#CEB389",
      },
    },
  },
  plugins: [],
};
