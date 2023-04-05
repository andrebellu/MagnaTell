/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#eba83a",
          "secondary": "#bb371a",
          "accent": "#d5dbb3",
          "accent-content": "#151515",
          "neutral": "#fbf1c1",
          "base-100": "#fff8d9",
          // "primary": "#151515",     // dark-grey/black
          // "secondary": "#243D59",   // catalina-blue/dark-blue
          // "accent": "#98A2A8",      // grey-chateau/grey
          // "neutral": "#E9E9E7",     // sugar-cane/light-grey
          // "base-100": "#FFFFFF",    // white
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        "loftygoals": ['loftygoals', 'cursive'],
        "cormorant": ['cormorant', 'serif'],
        "poppins": ['poppins', 'sans-serif'],
        "inter": ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}  