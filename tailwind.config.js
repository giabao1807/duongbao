/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontWeight: {
        light: '200'
      },
      colors: {
        primary: '#ffe031',
        secondary:'#8bd2bd',
        orange: '#E89736',
      },
      textColor: {
        primary: '#ffe031',
        secondary:'#8bd2bd',
      },
      backgroundColor: theme => ({
        'third' : '#29313D',
      })
    },
  },
  plugins: [],
}

