/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "786px",
        lg: "1024px",
        "2xl": "1400px"
      },
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)',
        'text-gradient': 'linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)',
        'contactback' : "url('/src/assets/form.jpg')",
        'aboutback' : "url('/src/assets/about.jpg')",
        'footerbg' : "url('/src/assets/resturant.jpg')"
      },
      boxShadow: {
        'shadowabout': '-5px 22px 26px 0px rgba(95, 95, 95, 0.25)',
        'aboutshadow': '0px 7px 16px 0px rgba(0, 0, 0, 0.1)',
      },
      letterSpacing: {
        footerspace: '0.06em',
      }
    },
    fontFamily: {
      'roboto': ['ui-sans-serif', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'bebas': ["Bebas Neue", 'sans-serif'],
      'popins': ["Poppins", 'sans-serif'],
      'sans' : ["Open Sans", 'sans-serif']
    }
  },
  plugins: [],
}