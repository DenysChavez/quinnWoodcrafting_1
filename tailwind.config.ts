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
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#A2A2A2',
          20: '#4F4F4F',
          30: '#3A3A3A',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        background: {
          10: '#252A27',
        },
        gold: {
          10: '#E6A666',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, white 50%, #252A27 50%)',
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/wood_hammer.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/wood_hammer.jpg')",
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
        }
      };
  
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};