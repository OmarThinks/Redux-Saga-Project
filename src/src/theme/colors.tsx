import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from 'react-native-paper';

const lightColors = {
  ...LightTheme.colors,

  appBg: '#ffffff',
  appBarBg: '#cccccc',
  normalText: '#000000',
  _surface: 'lightgreen',
  _onSurface: 'black',
};

type themeColors = typeof lightColors;

const darkColors: themeColors = {
  ...DarkTheme.colors,

  appBg: '#000000',
  appBarBg: '#333',
  normalText: '#ffffff',
  _surface: 'green',
  _onSurface: 'white',
};

export {darkColors, lightColors};
