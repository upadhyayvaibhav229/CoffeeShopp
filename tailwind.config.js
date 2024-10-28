/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-fancy-coffee-background-material-image_134209.jpg')",
      }
    },
  },
  plugins: [],
}
