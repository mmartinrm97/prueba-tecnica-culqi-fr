<template>
  <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
    <thead>
    <tr>
      <th
          v-for="header in props.tableHeaders"
          :key="header.id"
          class="px-6 py-6 text-base font-bold capitalize tracking-wider text-gray-600 bg-gray-50"
      >
        <div class="w-20 h-6 bg-gray-300 rounded-lg animate-pulse" :class="[header.name === 'Acciones' ? 'ml-auto' :'']"/>
      </th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white border-primary animate-pulse">
    <tr v-for="index in 10" :key="index" class="text-left hover:bg-gray-200 font-medium">
      <td class="whitespace-nowrap px-6 py-4">
        <div class="flex flex-col">
          <div class="h-5 bg-gray-300 rounded-lg w-2/3"></div>
          <div class="h-5 bg-gray-300 rounded-lg w-1/3 mt-1"></div>
        </div>
      </td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="h-5 bg-gray-300 rounded-lg w-full"></div>
      </td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="h-5 bg-gray-300 rounded-lg w-full"></div>
      </td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="h-5 bg-gray-300 rounded-lg w-full"></div>
      </td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="h-5 bg-gray-300 rounded-lg w-full"></div>
      </td>
      <td class="whitespace-nowrap px-6 py-4">
        <div class="flex gap-x-2 justify-end">
          <div class="bg-gray-300 p-2 rounded-lg w-8 h-8"></div>
          <div class="bg-gray-300 p-2 rounded-lg w-8 h-8"></div>
          <div class="bg-gray-300 p-2 rounded-lg w-8 h-8"></div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

interface Props {
  tableHeaders: Array<any>
}

const props = defineProps<Props>()

</script>

<style scoped>

</style>