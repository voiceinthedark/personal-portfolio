/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      rotate: {
        360: '360deg'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
