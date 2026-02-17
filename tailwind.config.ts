import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mapped from user's "Orange & Brown Pastels" image
        // We need to keep the 'stone', 'sage', 'sand' aliases to avoid breaking existing components

        // STONE (Neutrals/Backgrounds) -> Mapped to the Light Peach/Cream tones
        stone: {
          50: '#fffbf7', // Very light cream
          100: '#fff0e0', // Lighter peach
          200: '#FEDBAF', // **User Color #4: Pale Cream/Peach**
          300: '#fccfa0',
          400: '#fac290',
          500: '#dcb890',
          600: '#be9b76',
          700: '#a0805e',
          800: '#836748',
          900: '#685034',
          950: '#40301e',
        },

        // SAGE (Primary/Text) -> Mapped to the Brown/Tan Earth tones
        sage: {
          50: '#fcf6f3',
          100: '#f5e8e0',
          200: '#ebd1c2',
          300: '#dfb9a3',
          400: '#C48E64', // **User Color #1: Light Brown/Tan** - Used for primary elements
          500: '#b07d56',
          600: '#9c6c48',
          700: '#8B5E3C', // Generated Darker Brown for good contrast
          800: '#704a2f',
          900: '#5C3A21', // Darkest Brown for Text
          950: '#3d2514',
        },

        // SAND (Accents) -> Mapped to the Vibrant Oranges
        sand: {
          50: '#fff5ec',
          100: '#ffe6d3',
          200: '#ffcbaa',
          300: '#FFC48C', // **User Color #3: Light Orange**
          400: '#FFAF69', // **User Color #5: Bright Orange**
          500: '#F4A166', // **User Color #2: Orange/Peach**
          600: '#d6854f',
          700: '#b0693a',
          800: '#8c522d',
          900: '#6b3d22',
          950: '#452614',
        },

        // Legacy Aliases
        cream: {
          50: '#fffbf7',
          100: '#fff0e0',
          200: '#FEDBAF',
          300: '#fccfa0',
          400: '#fac290',
          500: '#dcb890',
          600: '#be9b76',
          700: '#a0805e',
          800: '#836748',
          900: '#685034',
          950: '#40301e',
        },
        forest: {
          50: '#fcf6f3',
          100: '#f5e8e0',
          200: '#ebd1c2',
          300: '#dfb9a3',
          400: '#C48E64',
          500: '#b07d56',
          600: '#9c6c48',
          700: '#8B5E3C',
          800: '#704a2f',
          900: '#5C3A21',
          950: '#3d2514',
        },
        gold: {
          50: '#fff5ec',
          100: '#ffe6d3',
          200: '#ffcbaa',
          300: '#FFC48C',
          400: '#FFAF69',
          500: '#F4A166',
          600: '#d6854f',
          700: '#b0693a',
          800: '#8c522d',
          900: '#6b3d22',
          950: '#452614',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        display: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      fontSize: {
        'base': ['1.125rem', { lineHeight: '1.75' }],
        'lg': ['1.25rem', { lineHeight: '1.75' }],
        'xl': ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '2' }],
        '3xl': ['2.25rem', { lineHeight: '2.25' }],
        '4xl': ['3rem', { lineHeight: '1' }],
        '5xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
