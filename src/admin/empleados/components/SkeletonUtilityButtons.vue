<template>
  <div class="grid grid-cols-3 gap-x-6">
    <SkeletonUnit v-for="index in 3" :key="index" />
  </div>
</template>

<script lang="ts" setup>
import SkeletonUnit from '@/admin/empleados/components/SkeletonUnit.vue'
</script>

<style scoped></style>
