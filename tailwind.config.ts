import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand design tokens
        primary:             '#000000',
        'primary-container': '#373633',
        secondary:           '#CE121F',
        'secondary-container': '#fce8e9',
        'tertiary-fixed':    '#CE121F',
        accent:              '#CE121F',
        'accent-hover':      '#b00f1a',
        background:          '#F6F5F5',
        surface:             '#ffffff',
        'on-surface':        '#000000',
        'on-surface-variant':'#222222',
        outline:             '#555555',
        'outline-variant':   '#d0d0d0',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
