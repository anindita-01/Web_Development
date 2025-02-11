import { colors } from '@mui/material';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none:"none",
      },
      borderWidth:{
        1: "1 px",
      },
      fontFamily:{
        quicksand: ["Quicksand", "serif"],
      },
      gridTemplateRows:{
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      



    }, 
  },
  plugins: [],
}

