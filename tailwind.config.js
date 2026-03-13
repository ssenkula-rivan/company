/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E4399',
        'cyan-blue': '#1E4399',
        'dark-blue': '#094321',
        'text-dark': '#000000',
        'orange': '#F1592B',
        'dark-orange': '#DC5328',
        'whatsapp-green': '#25D366',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
