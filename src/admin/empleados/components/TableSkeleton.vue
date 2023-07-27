<template>
  <table class="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
    <thead>
      <tr>
        <th
          v-for="header in props.tableHeaders"
          :key="header.id"
          class="px-6 py-6 text-base font-bold capitalize tracking-wider text-gray-600 bg-gray-50"
        >
          <SkeletonUnit
            :class="[header.name === 'Acciones' ? 'ml-auto' : '']"
            height-class="h-6"
            width-class="w-20"
          />
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white border-primary animate-pulse">
      <tr v-for="index in 10" :key="index" class="text-left hover:bg-gray-200 font-medium">
        <td class="whitespace-nowrap px-6 py-4">
          <div class="flex flex-col">
            <SkeletonUnit height-class="h-5" width-class="w-2/3"/>
            <SkeletonUnit class="mt-1" height-class="h-5" width-class="w-1/3"/>
          </div>
        </td>
        <td class="whitespace-nowrap px-6 py-4" >
          <SkeletonUnit height-class="h-5"/>
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          <SkeletonUnit height-class="h-5"/>
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          <SkeletonUnit height-class="h-5"/>
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          <SkeletonUnit height-class="h-5"/>
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          <div class="flex gap-x-2 justify-end">
            <SkeletonUnit height-class="h-8" width-class="w-8" class="p-2"/>
            <SkeletonUnit height-class="h-8" width-class="w-8" class="p-2"/>
            <SkeletonUnit height-class="h-8" width-class="w-8" class="p-2"/>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import SkeletonUnit from '@/admin/empleados/components/SkeletonUnit.vue'

interface Props {
  tableHeaders: Array<any>
}

const props = defineProps<Props>()
</script>

<style scoped></style>
