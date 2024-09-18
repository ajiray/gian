module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#3a3a3c',  // Dark gray color
        accent: '#fde010',   // Yellow color
        complement: '#ffffff',  // White color
      },
    },
  },
  plugins: [
    require('daisyui'),  // Adding DaisyUI plugin
  ],
  // Optional DaisyUI configuration to customize themes if needed
  daisyui: {
    themes: false,  // Disable DaisyUI's default themes if you want to use your own colors
  },
}
