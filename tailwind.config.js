/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      bold:["Schibsted Grotesk", "sans-serif"],
      bold1:["Roboto", "sans-serif"],
      bold2:["Rowdies", "system-ui"],
      bold3:["Roboto", "system-ui"],
      bold4:[ "Archivo Black", "system-ui"],
      bold5:["Archivo Black", "system-ui"]
   

    }
  },
  plugins: [],
}