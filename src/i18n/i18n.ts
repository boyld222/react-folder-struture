import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LOCALE_EN from '@/locales/en/translation.json'
import LOCALE_VI from '@/locales/vi/translation.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    translation: LOCALE_EN
  },
  vi: {
    translation: LOCALE_VI
  }
}
export const defaultNS = 'translation'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    ns: ['translation'],
    defaultNS,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
