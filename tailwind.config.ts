/** @type {import('tailwindcss').Config} */
type Utilities = {
  [key: string]: {
    [key: string]: string;
  };
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: '#A2A2A2',
          20: '#4F4F4F',
          30: '#3A3A3A',
        },
        background: {
          10: '#252A27',
        },
        gold: {
          10: '#E6A666',
        },
        brown: {
          10: '#494231'
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, white 50%, #252A27 50%)',
        'product-border':'linear-gradient(to bottom, #494231, #494231), linear-gradient(to right, #494231, #494231), linear-gradient(to left, #494231, #494231)',
        'pattern-2': "url('/productsImages/wood_hammer.jpg')",
      },
      backgroundSize: {
        'border-size': '5px 30%, 100% 5px, 5px 30%',
      },
      backgroundPosition: {
        'border-position': 'left bottom, bottom left, right bottom',
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      textShadow: {
        'custom': '2px 2px 10px rgb(0, 0, 0), 0 0 25px white, 0 0 5px white'
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(255, 194, 73, 0.19) 0px 6px 20px',
      },
      gridTemplateColumns: {
        'gallery' : 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    variants: {},
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Utilities, variants: string[]) => void }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '2px 2px 10px rgb(0, 0, 0), 0 0 25px white, 0 0 5px white',
        },
        '.hover\\:text-shadow-custom:hover': {
          textShadow: '2px 2px 10px rgb(0, 0, 0), 0 0 25px white, 0 0 5px white',
        },
        '.scroll-snap-x': {
          'scroll-snap-type': 'x mandatory',
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none',
        },
        '.carrousel::-webkit-scrollbar': {
          display: 'none',
        }
      };
  
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};