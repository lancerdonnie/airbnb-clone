/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        1: '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
        2: '0 0 0 1.5px #FFFFFF',
        3: 'rgb(0 0 0 / 8%) 0 1px 0',
        4: 'rgb(0 0 0 / 8%) 0 -1px 0',
      },
      colors: {
        alt: {
          1: '#484848',
          2: '#717171',
          3: '#DDDDDD',
        },
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
    },
  },
  plugins: [],
};
