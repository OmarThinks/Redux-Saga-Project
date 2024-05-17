import {getStoredLanguage, setStoredLanguage} from '@storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import ar from './ar/index';
import de from './de/index';
import en from './en/index';

export const defaultNS = 'common';

export type Language = 'en' | 'ar' | 'de';

type ResourcesType = {
  [key in Language]: typeof en;
};

type IsLanguageRtlType = {
  [key in Language]: boolean;
};

export const isLanguageRtl: IsLanguageRtlType = {
  en: false,
  ar: true,
  de: false,
};

//export default locale;

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources: ResourcesType = {en, ar, de} as const;

/*
export const isLangRTL: {
  [ keyof resources]: boolean;
} = {};
*/

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ns: [defaultNS],
    defaultNS,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

export const switchLanguage = async (language: Language) => {
  const oldIsRtl = I18nManager.isRTL;
  const newIsRtl = isLanguageRtl[language];
  I18nManager.forceRTL(newIsRtl);
  i18n.changeLanguage(language);

  await setStoredLanguage(language);

  if (newIsRtl !== oldIsRtl) {
    RNRestart.restart();
  }
};

export const initializeLanguage = async () => {
  const language = await getStoredLanguage();
  i18n.changeLanguage(language);
};
