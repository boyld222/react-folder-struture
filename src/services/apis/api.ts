import i18n from '@/i18n/i18n'
import axios, { AxiosInstance } from 'axios'
import { Cookies } from 'react-cookie'

const { language } = i18n
const cookies = new Cookies()

interface CustomAxios {
  switchServer?: () => void
  instance: AxiosInstance
}

const getInstance = () => {
  const token = cookies.get('token') || null
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API || 'https://api.chucknorris.io/',
    timeout: 10000,
    // paramsSerializer: (params) => queryString.stringify(params),
    headers: {
      'content-type': 'application/json',
      Bearer: token,
      'Accept-Language': language
    }
  })
  console.log(language)
  return instance
}

const API: CustomAxios = {
  instance: getInstance()
}

API.switchServer = () => {
  API.instance = getInstance()
}

export default API
