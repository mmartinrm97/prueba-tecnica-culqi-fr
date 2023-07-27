<template>
  <div class="grid grid-cols-12 gap-x-6">
    <!-- Search input -->
    <div class="col-span-9">
      <div class="relative">
        <input
          class="w-full rounded-xl py-3 pl-6 pr-4 text-sm text-black focus:text-black focus:outline-none border border-gray-300 focus:ring-2 focus:ring-primary"
          placeholder="Buscar empleado"
          type="text"
        />
        <span class="pointer-events-none absolute inset-y-0 right-6 flex items-center">
          <SearchIcon class="h-6 w-6 stroke-current text-gray-600" />
        </span>
      </div>
    </div>
    <!-- Select button -->
    <div class="col-span-3">
      <button
        class="inline-flex items-center w-full py-3 rounded-xl border border-gray-300 bg-white px-4 text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
      >
        <span class="text-sm">Nombre de Cargo</span>
        <ChevronDownIcon class="ml-auto h-5 w-5 stroke-current" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SearchIcon from '@/assets/icons/search.svg'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg'
</script>
