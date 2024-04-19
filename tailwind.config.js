// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darklue: '#002F5F',
        altblue: '#364B76',
        blue: '#5971A9',
        lightblue: '#D6DCF3',
        ashblue: '#F1F3FB',
        ash: '#F3F3F3',
        orange: '#FF5733',
      },
      fontFamily: {
        exo: 'Exo, san-serif',
        inter: 'Inter, sans-serif',
        montserrat: 'Montserrat, san-serif',
        roboto: 'Roboto, san-serif',
      },
      height: {
        screen: '100dvh',
      },
      gridTemplateColumns: {
        dashboard: '250px 1fr',
      },
    },
  },
  plugins: [],
};
