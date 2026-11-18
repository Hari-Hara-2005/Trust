/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        care: {
          bg: '#f1f4ee',        // signature Careunity linen/sage body
          timber: '#172d25',    // deep timber green (almost black-green)
          deep: '#173f32',      // deep forest green
          davy: '#526158',      // muted slate-gray text
          goose: '#cdd5c9',     // subtle border / light sage
          gold: '#ebc766',      // radiant ochre gold
          goldDark: '#d4ab3e',
          card: '#ffffff',
          lightGreen: '#e6ede4',
          accentOrange: '#ea580c',
          accentPink: '#d91b5c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        tamil: ['"Mukta Malar"', '"Noto Sans Tamil"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(23, 45, 37, 0.04)',
        'xs': '0 1px 3px 0 rgba(23, 45, 37, 0.08)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
