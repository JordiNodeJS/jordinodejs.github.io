/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Asegúrate que esta línea esté presente
  theme: {
    extend: {
      keyframes: {
        'fall-bounce': {
          '0%': { transform: 'translateY(0) translateX(-50%) scale(1.2)', opacity: '1' },
          '20%': { transform: 'translateY(20%) translateX(-50%) scale(1.1)', opacity: '1' },
          '40%': { transform: 'translateY(100%) translateX(-50%) scale(0.9)', opacity: '0.9' },
          '50%': { transform: 'translateY(80%) translateX(-50%) scale(0.85)', opacity: '0.8' },
          '60%': { transform: 'translateY(100%) translateX(-50%) scale(0.75)', opacity: '0.7' },
          '70%': { transform: 'translateY(90%) translateX(-50%) scale(0.6)', opacity: '0.5' },
          '80%': { transform: 'translateY(100%) translateX(-50%) scale(0.4)', opacity: '0.3' },
          '100%': { transform: 'translateY(200%) translateX(-50%) scale(0.2)', opacity: '0' }
        }
      },
      animation: {
        'fall-bounce': 'fall-bounce 1.2s ease-in-out forwards'
      }
    }
  }
}
