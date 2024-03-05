<script setup lang="ts">
import { Icon } from '@iconify/vue'
const props = defineProps<{
  text: string
  icon?: string
  color: 'green' | 'gray' | 'transparent'
}>()
</script>
<template>
  <div
    class="mx-auto flex items-center rounded-full px-8 py-3 font-madimiOne text-xl text-customWhite transition-transform hover:scale-110"
    :class="props.color == 'green' ? 'bg-customGreen' : props.color == 'gray' ? 'bg-gray-600' : ''"
  >
    <Icon
      v-if="icon != undefined"
      :icon="props.icon ?? ''"
      class="mr-1 inline-block h-8 w-8"
    ></Icon>
    {{ props.text }}
  </div>
</template>
