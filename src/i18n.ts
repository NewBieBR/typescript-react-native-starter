import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

export const defaultNS = 'translation';

export const resources = {
  en: {
    translation: {
      home: 'Home',
      settings: 'Settings',
    },
  },
  fr: {
    translation: {
      home: 'Accueil',
      settings: 'Paramètres',
    },
  },
} as const;

i18n.use(initReactI18next).init({
  ns: ['translation'],
  defaultNS,
  resources,
  lng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  compatibilityJSON: 'v3', // hermes compatible
});

export default i18n;
