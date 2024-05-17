import {Theme} from '@redux';
import {getData, storeData} from './base';

const themeStorageKey = 'theme';

const getStoredTheme = async () => {
  const theme = ((await getData(themeStorageKey)) as Theme) ?? 'light';
  return theme;
};

const setStoredTheme = async (theme: Theme) => {
  await storeData(themeStorageKey, theme);
};

export {getStoredTheme, setStoredTheme};
