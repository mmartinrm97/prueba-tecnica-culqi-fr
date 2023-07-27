import { computed, ref } from 'vue'

import type { ApiResponse, Empleado } from '@/admin/interfaces/empleado'
import empleadosApi from '@/api/empleadosApi'

const empleados = ref<Empleado[]>([])
const isLoading = ref<boolean>(true)
const hasError = ref<boolean>(false)
const errorMessage = ref<string | null>(null)

const getEmpleados = async (): Promise<Empleado[]> => {
  if (empleados.value.length > 0) return empleados.value

  try {
    const { data } = await empleadosApi.get<ApiResponse>('/empleados')
    return data.data
  } catch (error) {
    hasError.value = true
    isLoading.value = false
    errorMessage.value = 'Error al cargar los empleados'
    return [] // Devuelve una matriz vacía en caso de error
  }
}

const loadedEmpleados = (data: Empleado[]) => {
  empleados.value = data
  isLoading.value = false
  hasError.value = false
  errorMessage.value = ''
}

const useEmpleados = () => {
  //if getEmpleados returns true then loadedEmpleados will be executed
  getEmpleados()
    .then(loadedEmpleados)
    .catch(() => {
      hasError.value = true
      isLoading.value = false
      errorMessage.value = 'Error al cargar los empleados'
    })

  return {
    // Properties
    empleados,
    errorMessage,
    hasError,
    isLoading,

    // Getters
    count: computed(() => empleados.value.length)

    // Methods
  }
}

export default useEmpleados
