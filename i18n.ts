import i18n, {LanguageDetectorModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import translationEN from './locale/en/translation.json';
import translationRU from './locale/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

const RNLanguageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => {
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    const splitLocale = locale.replace('-', '_').toLocaleLowerCase().split('_');
    return splitLocale.length === 1
      ? splitLocale[0]
      : `${splitLocale[0]}_${splitLocale[1]}`;
  },
  cacheUserLanguage: () => {},
};

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: code => {
      if (!code) {
        return ['en'];
      }
      // @ts-ignore
      if (resources[code] === undefined) {
        const firstCodeKey = code.split('_')[0];
        // @ts-ignore
        if (resources[firstCodeKey] === undefined) {
          return ['en'];
        }
        return [firstCodeKey];
      }
      return [code];
    },
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    compatibilityJSON: 'v3',
  });

export default i18n;
