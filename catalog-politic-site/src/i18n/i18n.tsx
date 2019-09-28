import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from './translations';


i18n
  .use(new LanguageDetector(null, {

    // We manage i18n exclusively by path
    // (see https://support.google.com/webmasters/answer/182192)
    order: ['path'],

    // i18next-browser-languagedetector does not expose lookupFromPathIndex in
    // TypeScript, for some reason
    // @ts-ignore
    lookupFromPathIndex: 0
  }))
  .use(initReactI18next)
  .init({
    resources: translations,
    keySeparator: false,
    interpolation: { escapeValue: false }
  });

export default i18n;
