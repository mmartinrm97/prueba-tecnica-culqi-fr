import type { ApiEmpleadoResponse, Empleado } from '@/admin/empleados/interfaces/empleado'
import empleadosApi from '@/api/empleadosApi'
import { useQuery } from '@tanstack/vue-query'
import { useEmpleadosStore } from '@/stores/useEmpleadosStore'
import { storeToRefs } from 'pinia'
import {computed, ref, watch} from 'vue'

const totalEmpleados = ref<number>(0)
const getEmpleados = async (page: number, limit: number): Promise<Empleado[]> => {
  const { data } = await empleadosApi.get<ApiEmpleadoResponse>(
    `/empleados?page=${page}&limit=${limit}`
  )
  totalEmpleados.value = data.total
  return data.data
}

const useEmpleados = () => {
  const store = useEmpleadosStore()
  const {
    currentPage,
    empleados,
    totalPages,
    limit,} = storeToRefs(store)

  const { isLoading, data } = useQuery(['empleados?page=', currentPage, '?limit=', limit], () =>
    getEmpleados(currentPage.value, limit.value)
  )

  watch(data, (empleados) => {
    if (empleados) store.setEmpleados(empleados)
  })

  // Calcular el número total de páginas inicialmente
  watch(limit, () => {
    totalPages.value = Math.ceil(totalEmpleados.value / limit.value)
  })

  return {
    //Propeties
    totalEmpleados,
    isLoading,
    empleados,
    currentPage,
    totalPages,
    limit,
    //Methods
    getPage(page: number) {
      store.setPage(page)
    },
    // Getters
    totalPageNumbers: computed(() =>
      [...new Array(totalPages.value)].map((value, index) => index + 1)
      //   [...new Array(Math.ceil(totalEmpleados.value / limit.value))].map((value, index) => index + 1)
    )
  }
}

export default useEmpleados
