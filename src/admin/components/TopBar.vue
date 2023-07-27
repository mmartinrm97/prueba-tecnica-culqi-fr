<script lang="ts" setup>
import { useAuthUserStore } from '@/stores/useAuthUserStore'
import { storeToRefs } from 'pinia'

const authStore = useAuthUserStore()
const { user } = storeToRefs(authStore)

const getFirstLetters = (name?: string) => {
  if (name === undefined ) {
    return null
  }
  return name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
}
</script>

<template>
  <div class="flex items-center justify-end px-10 py-7 shadow-md bg-gray-50">
    <div class="flex items-center space-x-2">
      <button
        class="group flex h-11 items-center justify-center gap-x-2 text-gray-500 transition-colors"
      >
        <span class="rounded-full bg-orange-600 p-2 text-gray-50 font-semibold">{{
          getFirstLetters(user?.nombre)
        }}</span>
        <span class="text-sm font-bold text-gray-800">{{ user?.nombre }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
