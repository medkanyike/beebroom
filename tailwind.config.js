module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme=>({
        'banner':"url('images/bee.jpg')",
        'p1':"url('images/BokLes.jpg')",
        'p2':"url('images/CarsonFood.jpg')",
        'p3':"url('images/CifiquePackaging.jpg')",
        'p4':"url('images/dog.jpg')",
        'p5':"url('images/EnganziTour.jpg')",
        'p6':"url('images/EnganziTour2.jpg')",
        'p7':"url('images/GaryPhotograph.jpg')",
        'p8':"url('images/Nonix Booking.png')",
        'p9':"url('images/Orchard Ranches.jpg')",
        'p10':"url('images/Prince V_Boxing.jpg')",
        'p14':"url('images/Save a Life Campaign-10.jpg')",
        'p15':"url('images/STRASALC_Poster.jpg')",
      })
    },
  },
  plugins: [],
}