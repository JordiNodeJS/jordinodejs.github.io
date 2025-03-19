/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Asegúrate que esta línea esté presente
  theme: {
    extend: {
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(1.2)' }
        },
        'fall-bounce': {
          '0%': {
            transform: 'translateY(0) translateX(-50%) scale(1.2) rotate(0deg)',
            opacity: '1'
          },
          '20%': {
            transform:
              'translateY(20%) translateX(-50%) scale(1.1) rotate(72deg)',
            opacity: '1'
          },
          '40%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.9) rotate(144deg)',
            opacity: '0.9'
          },
          '50%': {
            transform:
              'translateY(80%) translateX(-50%) scale(0.85) rotate(180deg)',
            opacity: '0.8'
          },
          '60%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.75) rotate(216deg)',
            opacity: '0.7'
          },
          '70%': {
            transform:
              'translateY(90%) translateX(-50%) scale(0.6) rotate(252deg)',
            opacity: '0.5'
          },
          '80%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.4) rotate(288deg)',
            opacity: '0.3'
          },
          '100%': {
            transform:
              'translateY(200%) translateX(-50%) scale(0.2) rotate(360deg)',
            opacity: '0'
          }
        },
        'rise-bounce': {
          '0%': {
            transform:
              'translateY(200%) translateX(-50%) scale(0.2) rotate(0deg)',
            opacity: '0'
          },
          '20%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.4) rotate(72deg)',
            opacity: '0.3'
          },
          '30%': {
            transform:
              'translateY(90%) translateX(-50%) scale(0.6) rotate(108deg)',
            opacity: '0.5'
          },
          '40%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.75) rotate(144deg)',
            opacity: '0.7'
          },
          '50%': {
            transform:
              'translateY(80%) translateX(-50%) scale(0.85) rotate(180deg)',
            opacity: '0.8'
          },
          '60%': {
            transform:
              'translateY(100%) translateX(-50%) scale(0.9) rotate(216deg)',
            opacity: '0.9'
          },
          '80%': {
            transform:
              'translateY(20%) translateX(-50%) scale(1.1) rotate(288deg)',
            opacity: '1'
          },
          '100%': {
            transform:
              'translateY(0) translateX(-50%) scale(1.2) rotate(360deg)',
            opacity: '1'
          }
        },
        'confetti-explosion': {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: '1'
          },
          '50%': {
            transform: 'translate(var(--x), var(--y)) scale(0.5) rotate(var(--rotation))',
            opacity: '0.8'
          },
          '100%': {
            transform: 'translate(var(--final-x), var(--final-y)) scale(0) rotate(var(--final-rotation))',
            opacity: '0'
          }
        }
      },
      animation: {
        'bounce-once': 'bounce-once 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fall-bounce': 'fall-bounce 1.2s ease-in-out forwards',
        'rise-bounce': 'rise-bounce 1.2s ease-in-out forwards',
        'confetti': 'confetti-explosion 0.8s ease-out forwards'
      }
    }
  }
}
