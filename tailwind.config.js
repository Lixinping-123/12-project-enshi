/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'sxhm-bg': '#F7F5F0',
        'sxhm-dark': '#1a1010',
        'sxhm-red': '#6B1515',
        'sxhm-red-hover': '#8B1A1A',
        'sxhm-gold': '#C23B22',
        'enshi-bg': '#F7F5F0',
        'enshi-bg-alt': '#F0EFEB',
        'enshi-text': '#2C2C2C',
        'enshi-red': '#6B1515',
        'enshi-red-light': '#8B1A1A',
        'enshi-blue': '#4A6FA5',
        'enshi-blue-dark': '#1D4E89',
        'enshi-gold': '#E8A317',
        'enshi-muted': '#8B8680',
      },
      fontFamily: {
        'display': ['"Noto Serif SC"', '"Source Han Serif SC"', 'STSong', 'SimSun', 'serif'],
        'body': ['"Noto Sans SC"', '"Source Han Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
