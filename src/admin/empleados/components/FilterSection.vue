<template>
  <div class="flex space-x-6">
    <!--          Search input-->
    <div class="relative w-3/4">
        <span class="pointer-events-none absolute inset-y-0 flex items-center px-3">
          <SearchIcon class="h-6 w-6 stroke-current text-gray-600"/>
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
  </div>
</template>
<script lang="ts" setup>
import SearchIcon from '@/assets/icons/search.svg'
</script>