import axios from 'axios'

const isProduction = import.meta.env.PROD

export const api = axios.create({
  baseURL: isProduction ? '/api' : import.meta.env.VITE_VUE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
