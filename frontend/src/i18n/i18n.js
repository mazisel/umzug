import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import tr from './locales/tr.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import fa from './locales/fa.json';
import ku from './locales/ku.json';
import nl from './locales/nl.json';
import pt from './locales/pt.json';

const resources = {
  de: { translation: de },
  en: { translation: en },
  fr: { translation: fr },
  it: { translation: it },
  tr: { translation: tr },
  ar: { translation: ar },
  es: { translation: es },
  fa: { translation: fa },
  ku: { translation: ku },
  nl: { translation: nl },
  pt: { translation: pt }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;