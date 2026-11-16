/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sevai: {
          navy: '#1d195c',
          deep: '#151245',
          gold: '#f59e0b',
          saffron: '#ea580c',
          pink: '#d91b5c',
          green: '#15803d',
          teal: '#0f766e',
          light: '#f8fafc',
          warmBg: '#fdfbf7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Mukta Malar"', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

