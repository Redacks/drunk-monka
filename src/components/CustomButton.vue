<script setup lang="ts">
const tailwindColorMap = {
  green: "bg-customGreen",
  gray: "bg-gray-600",
  transparent: "",
  red: "bg-customRed"
};

const props = defineProps<{
  text: string;
  color: keyof typeof tailwindColorMap;
}>();
</script>
<template>
  <div
    class="mx-auto flex items-center rounded-full px-8 py-3 font-madimiOne text-xl text-customWhite transition-transform hover:scale-110"
    :class="tailwindColorMap[props.color]"
  >
    <slot></slot>
    {{ props.text }}
  </div>
</template>
