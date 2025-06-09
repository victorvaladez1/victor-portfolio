module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'eq-bar': 'eqPulse 1s infinite ease-in-out alternate',
      },
      keyframes: {
        eqPulse: {
          '0%': { transform: 'scaleY(0.3)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
  
}