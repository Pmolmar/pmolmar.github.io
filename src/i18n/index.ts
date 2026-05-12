import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CV_en from './CV_en';
import CV_es from './CV_es';

i18n.use(initReactI18next).init({
  resources: {
    en: { cv: CV_en },
    es: { cv: CV_es },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;