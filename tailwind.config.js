module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#48bdd2",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        
      },
      animation: {
        "slide-left-infinite": "slide-left 15s linear infinite",
        "slide-right-infinite": "slide-right 15s linear infinite",
      },
    },
  },
  
  plugins: [],
}
