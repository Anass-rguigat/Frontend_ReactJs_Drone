module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#48bdd2",
        redOne: "#a11c21",
        redTwo: '#d72323',
        secondWhite: "#f7f7f7",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
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
        float: 'float 2s ease-in-out infinite', // Ensure this is defined
        "slide-left-infinite": "slide-left 100s linear infinite",
        "slide-right-infinite": "slide-right 100s linear infinite",
      },
      backgroundImage: {
        'custom-gradient': "radial-gradient(circle, rgba(255,255,255,1) 11%, rgba(69,86,106,1) 68%, rgba(13,34,61,1) 98%)",
      },
      fontFamily: {
        bangers: ["Bangers", "serif"],
        bowlby: ["Bowlby One SC", "serif"],
      },
    },
  },
  plugins: [],
};