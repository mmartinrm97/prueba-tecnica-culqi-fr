<template>
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
        <FileDownloadIcon class="h-6 w-6 fill-current focus:outline-none"/>
        <span class="ml-2 text-sm">Descargar</span>
      </button>

      <!--          Nuevo button-->
      <button
          class="inline-flex items-center rounded-xl border-2 border-secondary bg-secondary px-6 py-3 text-white transition-colors hover:bg-white hover:text-secondary hover:border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      >
        <PlusIcon class="h-6 w-6 fill-current focus:outline-none"/>
        <span class="text-sm">Nuevo</span>
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
import PlusIcon from '@/assets/icons/plus.svg'
import FileDownloadIcon from '@/assets/icons/file-download.svg'

</script>