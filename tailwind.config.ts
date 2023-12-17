import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: ['var(--font-helvetica-neue)'],
      },
      fontSize: {
        heading1: ['84px', {
          lineHeight: '110%',
          letterSpacing: '-3.78px',
          fontWeight: '700'
        }],
        heading2: ['64px', {
          lineHeight: '110%',
          letterSpacing: '-2.88px',
          fontWeight: '700'
        }],
        heading3: ['52px', {
          lineHeight: '110%',
          letterSpacing: '-2.34px',
          fontWeight: '700'
        }],
        heading4: ['44px', {
          lineHeight: '110%',
          letterSpacing: '-1.32px',
          fontWeight: '500'
        }],
        subTitle: ['30px', {
          lineHeight: '120%',
          letterSpacing: '-0.9px',
          fontWeight: '700'
        }],
        bodyTextL: ['28px', {
          lineHeight: '120%',
          letterSpacing: '-0.28px',
          fontWeight: '400'
        }],
        bodyTextM: ['24px', {
          lineHeight: '130%',
          letterSpacing: '-0.48px',
          fontWeight: '400'
        }],
        bodyTextS: ['18px', {
          lineHeight: '135%',
          letterSpacing: '-0.18px',
          fontWeight: '700'
        }],
        linkText: ['21px', {
          lineHeight: '135%',
          letterSpacing: '-0.21px',
          fontWeight: '700'
        }],
        caption: ['23px', {
          lineHeight: '120%',
          letterSpacing: '2.53px',
          fontWeight: '500'
        }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '80': '80px',
      },
      colors: {
        primary: '#0E6FFF',
        Secondary: '#FFC928',
        dark: '#23242A',
        pastel: '#D1DCE5',
        light: '#FFFFFF',
        danger: '#FF4242',
        warning: '#FFF4D4',
      },
    },
  },
  plugins: [],
} satisfies Config
