/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
             ...theme('colors'),
             'primary': '#4c0070',
             'secondary': '#160040',
             'neutral': '#EFE7E7',
             'dark': '#1F1F1F'
            }),
            extend: {
              gradientColorStops: {
                'custom-gradient': {
                  '0': 'rgba(38, 30, 111, 1)',
                  '35': 'rgba(88, 18, 94, 1)',
                  '51': 'rgba(15, 15, 15, 1)',
                },
              },
              boxShadow: {
                'custom': '10px 10px 0px 0px #4c0070',
              },
              colors: {
                'customBlack': '#1F1F1F'
              },
            },
          
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      card: ["Libre "],
      title:["Poppins"],
              testimonial:["Paytone One"]
    },
  },
  plugins: [
    require('daisyui'),
  ],
}