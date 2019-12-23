import LocalizedStrings from 'react-native-localization';

export const LANGUAGES = ['fr', 'en'];

const Strings = new LocalizedStrings({
  en: {
    hello: 'Hello',
  },
  fr: {
    hello: 'Bonjour',
  },
});

export default strings;
