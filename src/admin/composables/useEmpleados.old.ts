import {onMounted, ref} from 'vue'

import type { ApiResponse, Empleado } from '@/admin/interfaces/empleado'
import empleadosApi from '@/api/empleadosApi'
import axios from 'axios'

const empleados = ref<Empleado[]>([])
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>()

export const useEmpleadosOld = () => {

  onMounted( async() => {
    await loadEmpleados();

  });
  const loadEmpleados = async () => {
    if (empleados.value.length > 0) return

    isLoading.value = true

    try {
      const { data } = await empleadosApi.get<ApiResponse>('/empleados')
      empleados.value = data.data
      isLoading.value = false
    } catch (error) {
      hasError.value = true
      isLoading.value = false

      if (axios.isAxiosError(error)) {
        return (errorMessage.value = error.message)
      }
      errorMessage.value = JSON.stringify(error)
    }
  }

  return { empleados, isLoading, hasError, errorMessage }
}
