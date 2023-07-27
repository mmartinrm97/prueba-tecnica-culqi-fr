<template>
  <!--      <aside class="w-64 border-r border-gray-200 px-10 py-6 shadow-xl bg-gray-50 min-h-screen">-->
  <aside class="flex w-72 flex-col px-10 pt-10 pb-6 bg-gray-50 shadow-xl shrink-0">
    <div class="flex flex-col items-center justify-center">
      <RouterLink
        :to="{ name: 'empleados' }"
        class="hover:scale-110 transition-transform ease-in-out"
      >
        <CulqiLogoBlackIcon alt="Culqi Logo" />
      </RouterLink>
    </div>
    <ul class="flex flex-col gap-y-6 pt-20 flex-1">
      <li v-for="link in props.links" :key="link.path">
        <RouterLink
          :class="{ 'text-primary': isActive(link.path) }"
          :to="link.path"
          class="group flex items-start gap-x-4 py-2 text-gray-500 hover:text-primary"
        >
          <span
            class="absolute left-0 h-8 w-1.5 -translate-x-full scale-y-0 rounded-r-full bg-primary transition-transform ease-in-out group-hover:translate-x-0 group-hover:scale-y-100"
          />
          <Component :is="link.icon" class="h-6 w-6 fill-current" />
          <span class="font-bold"> {{ link.title }}</span>
        </RouterLink>
      </li>
    </ul>
    <div class="sticky bottom-4 bg-top py-4">
      <UtilityButton class="w-full" description="Salir" @click="handleLogout" />
    </div>
  </aside>
</template>
<script lang="ts" setup>
import CulqiLogoBlackIcon from '@/assets/images/culqi_logo_black.svg'
import type { RouterLink } from '@/router/link-routes'
import { useRoute } from 'vue-router'
import router from '@/router'
import UtilityButton from '@/admin/empleados/components/UtilityButton.vue'

interface Props {
  links: RouterLink[]
}

const props = defineProps<Props>()

const route = useRoute()

const isActive = (path: string): boolean => {
  return route.name === path
}

const handleLogout = () => {
  localStorage.removeItem('jwt_token')
  router.push({ name: 'login' })
}
</script>

<style scoped></style>
