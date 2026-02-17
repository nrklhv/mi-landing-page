module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#151515',
          lighter: '#1a1a1a',
          border: '#2a2a2a',
        },
        gold: {
          DEFAULT: '#BFA87E',
          light: '#D4C4A0',
          dark: '#9A8550',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
