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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#ebf3fd',
          100: '#d6e7fa',
          200: '#b3d4f7',
          300: '#80b8f0',
          400: '#4d9ce8',
          500: '#2980b9',
          600: '#21618c',
          700: '#1a4d73',
          800: '#13395a',
          900: '#0c2541',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        gray: {
          50: '#f8f9fa',
          100: '#ecf0f1',
          200: '#d5dbdb',
          300: '#aeb6bf',
          400: '#85929e',
          500: '#7f8c8d',
          600: '#5d6d7e',
          700: '#34495e',
          800: '#2c3e50',
          900: '#1b2631',
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'saira': ['Saira Extra Condensed', 'sans-serif'],
        'muli': ['Muli', 'sans-serif'],
      },
      spacing: {
        '17': '4.25rem', // 68px
        '68': '20rem', // 320px - increased from 17rem
      },
      fontSize: {
        '6xl': ['6rem', { lineHeight: '1' }],
        '3.5xl': ['3.5rem', { lineHeight: '1.2' }],
        '2xl': ['2rem', { lineHeight: '1.2' }],
        '1.5xl': ['1.5rem', { lineHeight: '1.2' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
export default config 