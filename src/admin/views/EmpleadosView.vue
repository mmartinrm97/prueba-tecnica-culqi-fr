<template>
  <div class="flex flex-col rounded-lg bg-white p-8 shadow-sm gap-x-6 gap-y-8">
    <!--        Title, description, buttons -->
    <section class="flex items-center justify-between">
      <HeaderEmpleados :show="isLoading" />
      <SkeletonUnit v-if="isLoading" width-class="w-20" />
      <UtilityButtons v-else />
    </section>
    <!--       search and select inputs-->
    <section>
      <FilterSkeletonSection v-if="isLoading" />
      <FilterSection v-else />
    </section>
    <!-- Esqueleto de tabla mientras se carga la data -->
    <TableSkeleton v-if="isLoading" :table-headers="tableHeaders" />
    <TableEmpleados v-else :empleados="empleados" :table-headers="tableHeaders" />
    <PaginationNumbers />
  </div>
</template>

<script lang="ts" setup>
import HeaderEmpleados from '@/admin/empleados/components/HeaderEmpleados.vue'
import PaginationNumbers from '@/admin/empleados/components/PaginationNumbers.vue'
import useEmpleados from '@/admin/empleados/composables/useEmpleados'
import TableSkeleton from '@/admin/empleados/components/TableSkeleton.vue'
import FilterSkeletonSection from '@/admin/empleados/components/SkeletonUtilityButtons.vue'
import UtilityButtons from '@/admin/empleados/components/UtilityButtons.vue'
import SkeletonUnit from '@/admin/empleados/components/SkeletonUnit.vue'
import FilterSection from '@/admin/empleados/components/FilterSection.vue'
import TableEmpleados from '@/admin/empleados/components/TableEmpleados.vue'

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
