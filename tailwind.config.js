/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '-webkit-fill-available', '100dvh']
      },
      minHeight: {
        screen: ['100vh', '-webkit-fill-available', '100dvh']
      },
      colors: {
        primary: '#272838',
        secondary: '#1282A2',
        customWhite: '#F1F7ED',
        customGreen: '#4DA167',
        customRed: '#D52941'
      },
      fontFamily: {
        madimiOne: ['"Madimi One"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
