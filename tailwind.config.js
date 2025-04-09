module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        colors: {
          'space-purple': '#0a0216',
          'dark-violet': '#1c0129',
          'base-purple': '#2d0051',
          'vivid-purple': '#390052',
          'dark-plum': '#1e0033',
          'neon-pink': '#f72585',
          'magenta': '#b5179e',
          'violet': '#7209b7',
          'indigo-glow': '#3f37c9',
          'deep-purple': '#560bad',
        },
      },
    },
  },
  plugins: [],
};
