/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'verde': '#183426',
        'cinza': '#d1c9b7',
        'dourado': '#bea05b',
        'dourado-fundo': '#d6cdbb',
      },
    },
  },
  plugins: [],
};

