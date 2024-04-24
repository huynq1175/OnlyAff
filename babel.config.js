module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'nativewind',
        jsxImportSource: 'nativewind',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets/',
          '@components': './src/components',
          '@constants': './src/constants',
          '@context': './src/context',
          '@graphclient': './src/graphclient',
          '@hoc': './src/hoc',
          '@hooks': './src/hooks',
          '@libs': './src/libs',
          '@modules': './src/modules',
          '@queries': './src/queries',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
