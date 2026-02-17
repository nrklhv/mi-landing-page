module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a3a52',
          dark: '#142d3f',
          light: '#2d4a63',
        },
        slate: {
          modern: '#2d3e50',
        },
        forest: {
          DEFAULT: '#2d5a3d',
          light: '#3d7a52',
          dark: '#1e3d29',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
