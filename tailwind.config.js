/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': { min: '1536px' },
        xl: { min: '1280px' },
        lg: { min: '1024px' },
        md: { min: '768px' },
        sm: { min: '640px' },
      },
    },
  },
  plugins: [],
}
