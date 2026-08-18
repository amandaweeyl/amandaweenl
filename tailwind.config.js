/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        diatype: ['var(--font-diatype)'],
      },
      fontSize: {
        base: '1.6rem',
        sm: '1.4rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '2.4rem',
        '3xl': '2.6rem',
        '4xl': '3.8rem',
      },
      colors: {
        gold: 'rgb(248, 211, 128)',
        'white-85': 'rgba(255, 255, 255, 0.85)',
        'white-75': 'rgba(255, 255, 255, 0.75)',
        'white-40': 'rgba(255, 255, 255, 0.4)',
      },
    },
  },
}
