<template>
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Empleados</h2>
      <p v-if="!props.show" class="text-md font-medium text-gray-400">Gestiona tus empleados</p>
    </div>
</template>
<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()

</script>