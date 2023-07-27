import type { ApiEmpleadoResponse, Empleado } from '@/admin/empleados/interfaces/empleado'
import empleadosApi from '@/api/empleadosApi'
import { useQuery } from '@tanstack/vue-query'
import { useEmpleadosStore } from '@/stores/useEmpleadosStore'
import { storeToRefs } from 'pinia'
import { computed, watch } from 'vue'

const getEmpleados = async (page: number): Promise<Empleado[]> => {
  const { data } = await empleadosApi.get<ApiEmpleadoResponse>(`/empleados?page=${page}`)
  return data.data
}

const useEmpleados = () => {
  const store = useEmpleadosStore()
  const { currentPage, empleados, totalPages } = storeToRefs(store)

  const { isLoading, data } = useQuery(['empleados?page=', currentPage],
      () => getEmpleados(currentPage.value)
  )

  watch(data, (empleados) => {
    if (empleados) store.setEmpleados(empleados)
  })

  return {
    //Propeties
    isLoading,
    empleados,
    currentPage,
    totalPages,
    //Methods
    getPage(page: number) {
      store.setPage(page)
    },
    // Getters
    totalPageNumbers: computed(() =>
      [...new Array(totalPages.value)].map((value, index) => index + 1)
    )
  }
}

export default useEmpleados
