<template>
  <!-- paginator -->
  <div class="flex justify-between items-center">
    <div class="flex justify-center gap-x-2 pt-8">
      <button
        :class="[currentPage === 1 ? 'cursor-not-allowed' : '']"
        :disabled="currentPage === 1"
        class="flex h-8 w-8 items-center justify-center border-2 rounded-lg mr-6"
        @click="getPage(currentPage - 1)"
      >
        <ChevronLeftIcon
          :class="[currentPage === 1 ? 'text-gray-200' : 'text-secondary hover:text-secondary']"
          class="h-6 w-6"
        />
      </button>
      <button
        v-for="number of totalPageNumbers"
        :key="number"
        :class="
          currentPage === number
            ? 'bg-gray-100 text-secondary'
            : 'text-gray-400 hover:text-secondary'
        "
        class="flex h-8 w-8 items-center justify-center rounded-lg font-medium"
        @click="getPage(number)"
      >
        {{ number }}
      </button>
      <button
        :class="[currentPage === totalPages ? 'cursor-not-allowed' : '']"
        :disabled="currentPage === totalPages"
        class="flex h-8 w-8 items-center border-2 rounded-lg justify-center ml-6"
        @click="getPage(currentPage + 1)"
      >
        <ChevronRightIcon
          :class="[
            currentPage === totalPages ? 'text-gray-200' : 'text-secondary hover:text-secondary'
          ]"
          class="h-6 w-6"
        />
      </button>
    </div>
    <div class="flex items-center justify-between space-x-6">
      <div class="flex justify-center">Mostrando x registros: {{limit}} </div>
<!--      create a select with options 10,20,30-->
      <div class="flex items-center">
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full " v-model="limit">
          <option :value="10" selected>Mostrar 10</option>
          <option :value="20">Mostrar 20</option>
          <option :value="30">Mostrar 30</option>
        </select>
      </div>
    </div>
  </div>


</template>

<script lang="ts" setup>
import useEmpleados from '@/admin/empleados/composables/useEmpleados'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'


const { getPage, totalPageNumbers, currentPage, totalPages,limit } = useEmpleados()

</script>

<style scoped></style>