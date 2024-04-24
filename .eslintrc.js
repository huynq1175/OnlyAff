module.exports = {
  root: true,
  extends: [
    '@react-native',
  ],
  plugins: ['@react-native', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['warn', {ignoreRestArgs: true}],
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'no-console': ['error', {allow: ['warn', 'error']}],
  },
};
