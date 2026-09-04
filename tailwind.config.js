/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#05070D',
          dark: '#070A12',
          navy: '#0B1120',
          card: '#0E172A',
          cardHover: '#131F3B',
          border: '#1E293B',
          borderGlow: '#2563EB',
          blue: '#1E6BFB',
          blueLight: '#3B82F6',
          cyan: '#38BDF8',
          accent: '#60A5FA',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(30, 107, 251, 0.25)',
        'glow-lg': '0 0 40px rgba(30, 107, 251, 0.35)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
