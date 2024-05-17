import {Language} from '@locale';
import {getData, storeData} from './base';

const languageStorageKey = 'language';

const getStoredLanguage = async () => {
  const lang = ((await getData(languageStorageKey)) as Language) ?? 'en';
  return lang;
};

const setStoredLanguage = async (lang: Language) => {
  await storeData(languageStorageKey, lang);
};

export {getStoredLanguage, setStoredLanguage};
