import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Empleado } from '@/admin/empleados/interfaces/empleado'

export const useEmpleadosStore = defineStore('empleados', () => {
  const currentPage = ref<number>(1)
  const totalPages = ref<number>(5)
  const empleados = ref<Empleado[]>([])

  return {
    //states
    empleados,
    currentPage,
    totalPages,
    //Actions
    setEmpleados(newEmpleados: Empleado[]) {
      empleados.value = newEmpleados
    },
    setPage(page: number) {
      if ( currentPage.value === page ) return;
      if ( page <= 0 ) return;
      currentPage.value = page;
    }
  }
})
