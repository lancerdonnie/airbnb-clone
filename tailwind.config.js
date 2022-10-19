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
        5: '0 2px 4px rgba(0,0,0,0.18)',
        6: '0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent, 0px 6px 16px rgb(0 0 0 / 12%)',
      },
      colors: {
        alt: {
          1: '#484848',
          2: '#717171',
          3: '#DDDDDD',
          4: '#222222',
          5: '#FF385C',
          6: '#F7F7F7',
        },
      },
    },
  },
  plugins: [],
};
