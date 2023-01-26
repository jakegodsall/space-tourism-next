/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            barlow: ['Barlow Condensed', 'sans-serif'],
            bell: ['Bellefair', 'serif'],
        },
        extend: {
            backgroundImage: {
                'home-desktop': 'url("../public/images/home/background-home-desktop.jpg")',
                'home-tablet': 'url("../public/images/home/background-home-tablet.jpg")',
                'home-mobile': 'url("../public/images/home/background-home-mobile.jpg")',
                'destination-desktop':
                    'url("../public/images/destination/background-destination-desktop.jpg")',
                'destination-tablet':
                    'url("../public/images/destination/background-destination-tablet.jpg")',
                'destination-mobile':
                    'url("../public/images/destination/background-destination-mobile.jpg")',
                'crew-desktop': 'url("../public/images/crew/background-crew-desktop.jpg")',
                'crew-tablet': 'url("../public/images/crew/background-crew-tablet.jpg")',
                'crew-mobile': 'url("../public/images/crew/background-crew-mobile.jpg")',
                'technology-desktop':
                    'url("../public/images/technology/background-technology-desktop.jpg")',
                'technology-tablet':
                    'url("../public/images/technology/background-technology-tablet.jpg")',
                'technology-mobile':
                    'url("../public/images/technology/background-technology-mobile.jpg")',
            },
        },
    },
    plugins: [],
};
