// https://github.com/vadimdemedes/tailwind-rn#supported-utilities

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial'],
        'manrope-bold': ['Manrope3-Bold'],
        'manrope-medium': ['Manrope3-Medium'],
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
