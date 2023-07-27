<template>
  <button
    :class="[
      'flex items-center justify-center rounded-xl border-2 border-secondary px-6 py-3 text-secondary font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
      props.buttonClasses
    ]"
  >
    <Component :is="icon" v-if="icon" class="h-6 w-6 fill-current focus:outline-none mr-2" />
    <span :class="props.textClasses">{{ props.description }}</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  icon?: Object
  description: string
  buttonClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonClasses: 'bg-white hover:bg-secondary hover:text-white',
  textClasses: 'text-sm'
})
</script>

<style scoped></style>
