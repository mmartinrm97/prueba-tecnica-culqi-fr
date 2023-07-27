<template>
  <div class="flex flex-col rounded-lg bg-white p-8 shadow-sm gap-x-6 gap-y-8">
    <!--        Title, description -->
    <HeaderEmpleados />
    <!--       search and select inputs-->
    <FilterSection />
    <div>
      <!-- Esqueleto de tabla mientras se carga la data -->
      <TableSkeleton v-if="isLoading" :table-headers="tableHeaders" />
      <TableEmpleados v-else :empleados="empleados" :table-headers="tableHeaders" />
      <PaginationNumbers  />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TableEmpleados from '@/admin/empleados/components/TableEmpleados.vue'
import HeaderEmpleados from '@/admin/empleados/components/HeaderEmpleados.vue'
import FilterSection from '@/admin/empleados/components/FilterSection.vue'
import PaginationNumbers from '@/admin/empleados/components/PaginationNumbers.vue'
import useEmpleados from '@/admin/empleados/composables/useEmpleados'
import TableSkeleton from '@/admin/empleados/components/TableSkeleton.vue'

const { isLoading, empleados } = useEmpleados()

const tableHeaders = [
  {
    id: 1,
    name: 'Nombre'
  },
  {
    id: 2,
    name: 'Cargo'
  },
  {
    id: 3,
    name: 'Departamento'
  },
  {
    id: 4,
    name: 'Oficina'
  },
  {
    id: 5,
    name: 'Cuenta'
  },
  {
    id: 6,
    name: 'Acciones'
  }
]
</script>

<style scoped></style>
