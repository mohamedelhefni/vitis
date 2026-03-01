/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // Vitis brand colors - inspired by grapevine greens
        vitis: {
          50: '#f2f9f4',
          100: '#e0f2e5',
          200: '#c2e5cc',
          300: '#94d1a8',
          400: '#5fb67c',
          500: '#3d9b5c',  // Primary brand color
          600: '#2d7d48',
          700: '#25633b',
          800: '#214f32',
          900: '#1d422b',
          950: '#0d2417',
        },
        // Keep sage as an alias for backwards compatibility
        sage: {
          300: '#94d1a8',
          400: '#5fb67c',
          500: '#3d9b5c',
          600: '#2d7d48',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}