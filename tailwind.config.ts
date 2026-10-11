import type { Config } from 'tailwindcss';

// Brand values are defined once in public/styles/tokens.css; this only maps them to Tailwind classes.
const token = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: token('brand'),
          accent: token('brand-accent'),
        },
        surface: token('surface'),
        ink: token('ink'),
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};

export default config;
