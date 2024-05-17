module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components/index.tsx',
          '@hoc': './src/hoc/index.tsx',
          '@redux': './src/redux/index.tsx',
          '@screens': './src/screens/index.tsx',
          '@storage': './src/storage/index.tsx',
          '@theme': './src/theme/index.tsx',
          '@navigation': './src/navigation/index.tsx',
          '@locale': './src/locale/index.tsx',

          // '@app': './src/App.tsx' (Only if needed)
        },
      },
    ],
    'nativewind/babel',
  ],
};
