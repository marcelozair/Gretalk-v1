/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'container-max': '1200px',
        'aside': '400px'
      },
      backgroundImage: {
        hero:  "url('/images/background.svg')",
      },
      colors: {
        'primary': 'var(--primary)',
        'secundary': 'var(--secundary)',
        'black': 'var(--black)',
        'white': 'var(--white)',

        'black-opacity-70': 'var(--black-opacity-70)',
        'black-opacity-50': 'var(--black-opacity-50)',
        'black-opacity-30': 'var(--black-opacity-30)',
        'black-opacity-10': 'var(--black-opacity-10)',

        'app-border': 'var(--app-border)',
        'error': 'var(--error)',
        'letter-title': 'var(--black)'
      }
    },
  },
  plugins: [],
}
