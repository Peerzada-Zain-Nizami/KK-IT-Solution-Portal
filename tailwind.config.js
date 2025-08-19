/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": "#2D5DA1",
        "deep-navy-blue": "#14283E",
        "light-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
