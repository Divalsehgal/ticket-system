/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    colors: {

      transparent: "transparent",
      current: "currentColor",

      light: {

        background: "#FFFFFF",     // white
        surface: "#F3F4F6",        // gray-100

        primary: "#0052CC",        // contrast 6.8:1 on white ✅
        secondary: "#344054",      // contrast 12:1 ✅

        text: "#101828",           // contrast 15:1 ✅

        accent: "#B54708",         // accessible orange

        delete: "#B42318",         // accessible red

        border: "#D0D5DD",

      },

      dark: {

        background: "#0B0F19",

        surface: "#161B26",

        primary: "#4C8DFF",       // contrast 5.9:1 on dark ✅

        secondary: "#98A2B3",

        text: "#F9FAFB",          // contrast 14:1 ✅

        accent: "#F79009",

        delete: "#F04438",

        border: "#344054",

      },

    },

    extend: {

      borderRadius: {
        card: "12px",
        button: "8px",
      },

      spacing: {
        card: "16px",
        button: "12px",
      },

    },

  },

  plugins: [],
};