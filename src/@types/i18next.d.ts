import 'i18next'
import { resources, defaultNS } from 'src/i18n/i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['vi']
    defaultNS: typeof defaultNS
  }
}
