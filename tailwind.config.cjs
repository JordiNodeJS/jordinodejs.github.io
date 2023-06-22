/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      // 'pastel',
      // 'dark',
      {
        porfolio: {
          primary: '#5890d8',
          secondary: '#f4d7b7',
          accent: '#69b2d3',
          neutral: '#2b1c31',
          'base-100': '#363a3f',
          info: '#98b7f0',
          success: '#51e1c7',
          warning: '#f8ab59',
          error: '#e8554a'
        }
      }
    ]
  }
}
