<template>
  <div class="flex items-center justify-between mt-10 space-x-2">
    <button
      :class="[currentPage === 1 ? 'cursor-not-allowed' : '']"
      :disabled="currentPage === 1"
      @click="getPage(currentPage - 1)"
    >
      Anterior
    </button>

    <button
      v-for="number of totalPageNumbers"
      :key="number"
      :class="[currentPage === number ? 'bg-primary text-white' : 'bg-white']"
      @click="getPage(number)"
    >
      {{ number }}
    </button>

    <button
      :class="[currentPage === totalPages ? 'cursor-not-allowed' : '']"
      :disabled="currentPage === totalPages"
      @click="getPage(currentPage + 1)"
    >
      Siguiente
    </button>
  </div>

  <!-- paginator -->
<!--<div class="flex justify-between">-->
<!--  <div class="flex justify-center gap-x-2 pt-8">-->
<!--    <button class="flex h-8 w-8 items-center justify-center">-->
<!--      <ChevronLeftIcon-->
<!--          class="h-6 w-6 to-gray-800 stroke-current hover:text-indigo-600"-->
<!--      />-->
<!--    </button>-->
<!--    <button-->
<!--        v-for="i in 6"-->
<!--        class="flex h-8 w-8 items-center justify-center rounded-full font-medium"-->
<!--        :class="-->
<!--            i === 1-->
<!--              ? 'bg-gray-800 text-white'-->
<!--              : 'text-gray-400 hover:text-indigo-600'-->
<!--          "-->
<!--    >-->
<!--      {{ i }}-->
<!--    </button>-->
<!--    <button class="flex h-8 w-8 items-center justify-center">-->
<!--      <ChevronRightIcon-->
<!--          class="h-6 w-6 to-gray-800 stroke-current hover:text-indigo-600"-->
<!--      />-->
<!--    </button>-->
<!--  </div>-->
<!--  <div class="flex justify-center">-->
<!--    Mostrando 1 a 8 de 50 registros-->
<!--  </div>-->
<!--</div>-->
</template>

<script lang="ts" setup>
import useEmpleados from '@/admin/empleados/composables/useEmpleados'
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg'
import ChevronRightIcon from '@/assets/icons/chevron-right.svg'

const { getPage, totalPageNumbers, currentPage, totalPages } = useEmpleados()


</script>

<style scoped>

</style>
