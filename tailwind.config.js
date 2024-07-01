module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-dark-secondary': '#161b22',
        'github-border': '#30363d',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}