import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
const BASE_URL =  import.meta.env.VITE_API_BASE_URL

const empleadosApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
})

empleadosApi.defaults.headers.common['Content-Type'] = 'application/json';

// Agregar el token JWT al header de las peticiones
empleadosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Obtener el token JWT
  const token: string | null = localStorage.getItem('jwt_token')

  if (token) {
    // Asegurar que headers exista o proporcionar un objeto vacío
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
export default empleadosApi
