/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('./src/styles/colors.js').default;
const typography = require('./src/styles/typography.js').default;
const spacing = require('./src/styles/spacing.js').default;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    fontFamily: {
      SFProText: [
        'SFProText-Bold',
        'SFProText-Medium',
        'SFProText-Regular',
        'SFProText-Semibold',
      ],
    },
    colors: {
      ...colors,
    },
    extend: {
      spacing: {
        ...spacing,
      },
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      const typographies = {};
      Object.keys(typography).forEach(key => {
        typographies[`.${key}`] = {
          ...typography[key],
          lineHeight: `${typography[key].lineHeight}px`,
          color: theme('colors.dark.500'),
        };
      });

      addComponents(typographies);
    }),
  ],
};
