/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    'src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-artist': "url('https://hiphop.de/sites/default/files/styles/twitter/public/news_articles/drake_pr_applemusic_2021_1600.jpg?h=8abcec71&itok=nKWfdibV')"        
      },
      backgroundColor: {
        'overlay': '#00000069'
      }
    },
  },
  plugins: [],
}