/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: '#07111F',
        graphite: '#0B1728',
        night: '#07111F',
        steel: '#536174',
        muted: '#64748B',
        line: 'rgb(15 23 42 / 0.09)',
        page: '#EEF3F8',
        surface: '#FFFFFF',
        panel: '#FFFFFF',
        frost: '#F6F8FB',
        soft: '#F1F5F9',
        accent: '#1D4ED8',
        'accent-2': '#2563EB',
        cyan: '#1D4ED8',
        'cyan-soft': '#3B82F6',
        sky: '#2563EB',
        amber: '#D97706',
        violet: '#6D5BD0',
        blue: {
          50: '#EAF6FF',
          100: '#D8EDFF',
          300: '#7CC7FF',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgb(15 23 42 / 0.05), 0 24px 64px -44px rgb(15 23 42 / 0.28)',
        ring: '0 0 0 1px rgb(15 23 42 / 0.08)',
        subtle: '0 1px 2px rgb(15 23 42 / 0.06)',
        premium: '0 1px 2px rgb(15 23 42 / 0.05), 0 32px 90px -58px rgb(15 23 42 / 0.42)',
        blue: '0 16px 34px -22px rgb(37 99 235 / 0.85)',
        cyan: '0 16px 34px -22px rgb(37 99 235 / 0.55)',
        deck: '0 1px 2px rgb(15 23 42 / 0.06), 0 32px 90px -58px rgb(15 23 42 / 0.42)',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(rgb(15 23 42 / 0.055) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.055) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '32px 32px',
      },
      letterSpacing: {
        'widest-2': '0.14em',
      },
    },
  },
  plugins: [],
}
