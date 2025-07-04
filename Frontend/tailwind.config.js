module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        rain: 'rain 15s linear infinite',
      },
      keyframes: {
        rain: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      // ✅ Add this for negative z-index support
      zIndex: {
        '-1': '-1',
        '-2': '-2',
      },
    },
  },
  plugins: [],
};
