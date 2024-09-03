import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      
      container:{
        center: true,
        padding: "15px",
      },

      colors:{
        orange: "#ff5d22"
      },

      fontFamily:{
        sans: "Netflix sans"
      }
    },
  },
  plugins: [],
};
export default config;
