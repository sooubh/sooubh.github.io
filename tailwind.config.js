/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        neonFlicker: {
          '0%, 100%': {
            textShadow: '0 0 5px #0096c7, 0 0 10px #0096c7, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff',
          },
          '50%': {
            textShadow: '0 0 5px #0096c7, 0 0 10px #0096c7, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 75px #ff00ff',
          },
        }
      },
      animation: {
        neonFlicker: 'neonFlicker 1.5s infinite alternate',
      }
    }
  },
  plugins: [],
}
