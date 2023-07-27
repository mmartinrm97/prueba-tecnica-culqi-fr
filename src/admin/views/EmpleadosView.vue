<template>
  <div class="flex flex-col rounded-lg bg-white p-8 shadow-sm gap-x-6 gap-y-8">
    <!--        Title, description -->
    <section class="flex items-center justify-between">
      <div class="space-y-2">
        <h2 class="text-2xl font-semibold">Empleados</h2>
        <p class="text-md font-medium text-gray-400">Gestiona tus empleados</p>
      </div>
      <div class="space-x-6">
        <!--  Descargar button-->
        <button
          class="inline-flex items-center rounded-xl border-2 border-secondary bg-white px-6 py-3 text-secondary transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <FileDownloadIcon class="h-6 w-6 fill-current focus:outline-none" />
          <span class="ml-2 text-sm">Descargar</span>
        </button>

        <!--          Nuevo button-->
        <button
          class="inline-flex items-center rounded-xl border-2 border-secondary bg-secondary px-6 py-3 text-white transition-colors hover:bg-white hover:text-secondary hover:border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <PlusIcon class="h-6 w-6 fill-current focus:outline-none" />
          <span class="text-sm">Nuevo</span>
        </button>
      </div>
    </section>
    <!--       search and select inputs-->
    <section class="flex space-x-6">
      <!--          Search input-->
      <div class="relative w-3/4">
        <span class="pointer-events-none absolute inset-y-0 flex items-center px-3">
          <SearchIcon class="h-6 w-6 stroke-current text-gray-600" />
        </span>
        <input
          class="w-full rounded-xl py-3 pl-10 pr-4 text-sm text-black focus:text-black focus:outline-none border border-gray-300"
          placeholder="Buscar empleado"
          type="text"
        />
      </div>
      <!--          Select button-->
      <div class="w-1/4">
        <select
          class="rounded-xl py-3 pl-6 pr-6 text-sm text-black focus:text-black focus:outline-none border border-gray-300"
        >
          <option selected>Nombre de Cargo</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </section>
    <div>
      <TheTable />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PlusIcon from '@/assets/icons/plus.svg'
import SearchIcon from '@/assets/icons/search.svg'
import FileDownloadIcon from '@/assets/icons/file-download.svg'
import TheTable from '@/admin/components/TheTable.vue'

</script>

<style scoped></style>