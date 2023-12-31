module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dosis: ['Dosis', 'sans-serif'],
        cedarville: ['Cedarville Cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
