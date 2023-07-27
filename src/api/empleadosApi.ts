import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const empleadosApi = axios.create({
  baseURL: 'https://fepruebatecnicaculqi-backend-production.up.railway.app'
})

// Agregar el token JWT al header de las peticiones
empleadosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Obtener el token JWT desde donde lo hayas almacenado (por ejemplo, localStorage)
  const token = localStorage.getItem('jwt_token')

  if (token) {
    // Asegurar que headers exista o proporcionar un objeto vacío
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
})
export default empleadosApi
