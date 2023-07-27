<template>
  <div class="space-x-6 flex">
    <!--  Descargar button-->
    <UtilityButton :icon="FileDownloadIcon" description="Descargar"/>

    <!--          Nuevo button-->
    <UtilityButton :icon="PlusIcon" description="Nuevo" button-classes="bg-secondary hover:bg-white hover:text-secondary hover:border-secondary text-white"/>

  </div>
</template>
<script setup lang="ts">
import PlusIcon from '@/assets/icons/plus.svg'
import FileDownloadIcon from '@/assets/icons/file-download.svg'
import UtilityButton from "@/admin/empleados/components/UtilityButton.vue";
</script>