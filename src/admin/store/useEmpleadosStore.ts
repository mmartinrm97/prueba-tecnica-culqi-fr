import { defineStore } from 'pinia'
import {computed, ref} from 'vue'
import type { ApiResponse, Empleado } from '@/admin/interfaces/empleado'
import empleadosApi from '@/api/empleadosApi'

export const useEmpleadosStore = defineStore('empleados', () => {
    const empleados = ref<Empleado[]>([])
    const isLoading = ref<boolean>(true)
    const hasError = ref<boolean>(false)
    const errorMessage = ref<string | null>(null)

    async function fetchEmpleados() {
        if (empleados.value.length > 0) return empleados.value

        try {
            const { data } = await empleadosApi.get<ApiResponse>('/empleados')
            empleados.value = data.data
            isLoading.value = false
            hasError.value = false
            errorMessage.value = null
        } catch (error) {
            hasError.value = true
            isLoading.value = false
            errorMessage.value = 'Error al cargar los empleados'
        }
    }

    // Getter to return the total number of empleados
    const count = computed(() => empleados.value.length)

    return { empleados, isLoading, hasError, errorMessage, fetchEmpleados, count }
})
