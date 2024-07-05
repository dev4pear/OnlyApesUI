/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9150F8',
        secondary: '#535559',
        background: '#0B070E',
        gray: '#464444',
        pane: "#232323",
      },
      fontFamily: {
        'jua': ['Jua', 'sans-serif'],
      },
      filter: {        
      },
    },
  },
  plugins: [],
}