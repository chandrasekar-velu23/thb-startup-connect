import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C92515',
        'primary-dark': '#a71e0f',
        'primary-light': '#e04a38',
        black: '#000000',
        'dark-grey': '#2C2E35',
        'mid-grey': '#4b5563',
        'light-grey': '#e5e7eb',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        montserrat: ['var(--font-montserrat)'],
        univia: ['var(--font-univia)'],
        sans: ['var(--font-montserrat)'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-mentor': 'scroll-mentor 40s linear infinite',
      },
      keyframes: {
        'scroll-mentor': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 12px))' },
        },
      },
      boxShadow: {
        'custom-hover': '0 20px 40px rgb(0 0 0 / 0.08)',
      },
      spacing: {
        '170': '170px',
      },
    },
  },
  plugins: [],
}
export default config
