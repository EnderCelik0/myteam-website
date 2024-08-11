/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // COLORS

    extend: {
      fontSize: {
        "bold-lg": "6.25rem",
        "bold-md": "4rem",
        "bold-sm": "3rem",
        "bold-xs": "1.125rem",
        "semi-bold-sm": "1.125rem",
        "semi-bold-xs": "0.938rem",
      },

      colors: {
        "midnight-green": "hsl(186, 98%, 17%)",
        "light-coral": "hsl(0, 87%, 73%)",
        "rapture-blue": "hsl(179, 42%, 63%)",
        "police-blue": "hsl(187, 41%, 29%)",
        "jungle-green": "hsl(186,100%, 14%)",
        "state-green": "hsl(186,96%, 10%)",
        "dark-green": "hsl(186, 100%, 8%)",
      },
      fontFamily: {
        livvic: ['"Livvic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
