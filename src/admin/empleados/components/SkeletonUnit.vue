<template>
  <div :class="['animate-pulse bg-gray-300 rounded-xl', props.widthClass, props.heightClass]"></div>
</template>
<script lang="ts" setup>
interface Props {
  widthClass?: string
  heightClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  widthClass: 'w-full',
  heightClass: 'h-8'
})
</script>
