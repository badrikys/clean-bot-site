import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A57',
        accent: '#7AC3EC',
        success: '#22C55E',
        warning: '#F59E0B',
        background: '#FFFFFF',
        surface: '#F7F7F5',
        border: '#E5E5E5',
        'text-primary': '#37352F',
        'text-secondary': '#787774',
        'text-muted': '#9B9B9B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
        'small': '14px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
