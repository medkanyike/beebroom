module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme=>({
        'banner':"url('images/bee.jpg')",
        'p1':"url('images/Bareback Boerbels_Flyer.jpg')",
      })
    },
  },
  plugins: [],
}