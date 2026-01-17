import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        surface: 'var(--aw-color-surface)',
        // Theme tint colors for consistent light/dark backgrounds
        'primary-light': 'var(--aw-color-primary-light)',
        'primary-dark': 'var(--aw-color-primary-dark)',
        'primary-muted': 'var(--aw-color-primary-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        warm: '0 4px 14px 0 rgba(243, 128, 32, 0.08)',
        'warm-lg': '0 10px 40px -10px rgba(243, 128, 32, 0.15)',
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        elevated: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        250: '250ms',
      },
      animation: {
        fade: 'fadeInUp 1s both',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'scale-in': 'scaleIn 0.5s ease-out both',
        'blur-in': 'blurIn 0.6s ease-out both',
        'slide-in-right': 'slideInRight 0.5s ease-out both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        blurIn: {
          '0%': { opacity: 0, filter: 'blur(10px)' },
          '100%': { opacity: 1, filter: 'blur(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(-1rem)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
