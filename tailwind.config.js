/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
             ...theme('colors'),
             'primary': '#58125e',
             'secondary': '#210576',
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
    }
  },
  plugins: [
    require('daisyui'),
  ],
}