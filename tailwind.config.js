/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        focus: 'var(--focus)',
        'primary-50': 'var(--primary-50)',
        'primary-100': 'var(--primary-100)',
        'primary-200': 'var(--primary-200)',
        'primary-300': 'var(--primary-300)',
        'primary-400': 'var(--primary-400)',
        'primary-500': 'var(--primary-500)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        'primary-DEFAULT': 'var(--primary-DEFAULT)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {   //the color values must be the same of the ./scr/app/styles/variables.scss
      "modern": {
        extend: "dark",
        colors: {
          background: "#000000",
          foreground: "#ffffff",
          focus: "#ffc71a",
          primary: {
            50: "#fff9da",
            100: "#ffecad",
            200: "#ffe07d",
            300: "#ffd34b",
            400: "#ffc71a",
            500: "#e6ad00",
            600: "#b38700",
            700: "#806000",
            800: "#4e3a00",
            900: "#1d1300",
            DEFAULT: "#ffc71a"
          },
        }
      }
    }
  })],
}

