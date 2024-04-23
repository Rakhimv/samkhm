/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      xs: '480px',
      xsmin: '400px',
      noxs480: { max: "480px" },
      xs658: '658px',
      noxs658: { max: "658px" },
      xs850: '850px',
      xs1000: '1000px',
      noxs1000: { max: "1000px" },
      xs1167: '1167px',
      noxs1167: { max: "1167px" },
      exl: { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      ll: { max: "900px" },
      md: { max: "767px" },
      sm: { max: "600px" },
      sw: { max: "500px" },
      mb: { max: "425px" },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#F6F8F9",
          foreground: "#000",
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#141F78",
          },

          secondary: {
            DEFAULT: "#ffffff",
          },


          danger: {
            DEFAULT: "#d32f2f",
          }
        },
      },
      dark: {
        colors: {
          background: "#1E2128",
          foreground: "#ECEDEE",
          primary: {
            foreground: "#000000",
            DEFAULT: "#06FBFE",
          },

          secondary: {
            DEFAULT: "#000000",
            foreground: "#FFFFFF",
          },

          danger: {
            DEFAULT: "#d32f2f",
          }
        },
      }
    },
  }),]
}