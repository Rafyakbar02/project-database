/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      extend: {
        colors: {
          "cus-green-50": "#AFE31C",
          "cus-green-100": "#A6CE38",
          "cus-green-200": "#87A92A",
          "cus-blue-50": "#2863D7",
          "cus-blue-100": "#217FC6",
          "cus-blue-200": "#3C98DE",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
