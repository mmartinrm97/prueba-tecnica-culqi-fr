<template>
  <!--      <aside class="w-64 border-r border-gray-200 px-10 py-6 shadow-xl bg-gray-50 min-h-screen">-->
  <aside class="flex w-72 flex-col px-10 pt-10 pb-6 bg-gray-50 shadow-xl shrink-0 ">
    <div class="flex flex-col items-center justify-center">
      <CulqiLogoBlackIcon alt="Culqi Logo" />
    </div>
    <ul class="flex flex-col gap-y-6 pt-20 flex-1">
      <li v-for="link in props.links" :key="link.path">
        <RouterLink
          :to="link.path"
          class="group flex items-start gap-x-4 py-2 text-gray-500 hover:text-primary"
          :class="{ 'text-primary': isActive(link.path) }"
        >
          <span
            class="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-primary transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100"
          />
          <Component :is="link.icon" class="h-6 w-6 fill-current" />
          <span class="font-bold"> {{ link.title }}</span>
        </RouterLink>
      </li>
    </ul>
    <div class="sticky bottom-4 rounded-lg bg-top py-4">
      <button
        class="w-full rounded-lg bg-gray-50 py-3 border-2 border-secondary text-base font-bold text-gray-900 hover:text-white hover:bg-secondary"
      >
        Salir
      </button>
    </div>
  </aside>
</template>
<script lang="ts" setup>
import CulqiLogoBlackIcon from '@/assets/images/culqi_logo_black.svg'
import type { RouterLink } from '@/router/link-routes'
import {useRoute} from "vue-router";

interface Props {
  links: RouterLink[]
}

const props = defineProps<Props>()

// Hook useRoute proporcionado por Vue Router
const route = useRoute()

// Función para comprobar si una ruta está activa
const isActive = (path: string): boolean => {
  return route.name === path
}
</script>

<style scoped>

</style>
