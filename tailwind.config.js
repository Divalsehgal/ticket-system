/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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

      colors: {
        dark: {
          primary: "#333333", // Dark primary color
          secondary: "#555555", // Dark secondary color
          background: "#121212", // Dark background color
          text: "#FFFFFF", // Dark text color
          accent: "#FFD700", // Dark accent color
          delete: "#FF0000",
        },
        light: {
          primary: "#007BFF", // Light primary color
          secondary: "#4A90E2", // Light secondary color
          background: "#FFFFFF", // Light background color
          text: "#333333", // Light text color
          accent: "#FFA500", // Light accent color
          delete: "#DC143C",
        },
      },
    },
  },
  plugins: [],
};
