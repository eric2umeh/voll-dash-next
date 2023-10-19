/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      'heading1-bold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading1-semibold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'heading2-bold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading2-semibold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'heading3-bold': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading3-semibold': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'heading4-medium': [
        '20px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'body-semibold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'body-medium': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-normal': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'body1-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'base-regular': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'base-medium': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'base-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'small-regular': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'small-medium': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'small-semibold': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'subtle-small': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '300',
        },
      ],
      'subtle-medium': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      'subtle-semibold': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '600',
        },
      ],
      'tiny-medium': [
        '10px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'x-small-semibold': [
        '7px',
        {
          lineHeight: '9.318px',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'secondary-500': '#FFB620',
        'green-1': '#039855',
        'green-2': '#027A48',
        'green-3': '#ECFDF3',
        'purple-1': '#6941C6',
        'purple-2': '#7F56D9',
        'pink-1': '#DD2590',
        'pink-2': '#C11574',
        'blue-1': '#0086C9',
        'blue-2': '#1570EF',
        'blue-3': '#175CD3',
        'red-1': '#FEF3F2',
        'red-2': '#B42318',
        'red-3': '#D92D20',
        'navbar-menu': 'rgba(16, 16, 18, 0.6)',
        'dark-1': '#000000',
        'dark-2': '#101828',
        'light-1': '#FFFFFF',
        'light-2': '#FCFCFD',
        'light-3': '#F8F9FC',
        'light-4': '#F2F4F7',
        'light-5': '#D0D5DD',
        'light-6': '#EAECF0',
        'gray-1': '#697C89',
        'gray-2': '#869ab8',
        'gray-3': '#344054',
        'gray-4': '#475467',
        'gray-5': '#363F72',
        'purple-1': '#7F56D9',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
      boxShadow: {
        'count-badge': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
        'groups-sidebar': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)',
      },
      screens: {
        xs: '400px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
