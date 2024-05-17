/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-orange": "#ffcc99",
        "grayish-blue": "#818ca8",
        "off-white": "#f7f7f7",
        "off-white2": "#f0f0f0"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '475px',
      },
      fontSize: {
      },
    },
  },
  plugins: {
    autoprefixer: {},
  },
};
