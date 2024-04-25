<script setup lang="ts">
import { ref } from "vue";

const openDialog = ref(false);

const emit = defineEmits<{
  (e: "cancel"): void;
  (e: "confirm"): void;
}>();
</script>
<template>
  <button @click="openDialog = true" class="mx-auto"><slot></slot></button>
  <div
    class="fixed left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
    v-if="openDialog"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-10">
        <button
          @click="
            emit('confirm');
            openDialog = false;
          "
          class="scale-110"
        >
          <slot name="confirm"></slot>
        </button>
        <button
          @click="
            emit('cancel');
            openDialog = false;
          "
        >
          <slot name="cancel"></slot>
        </button>
      </div>
    </div>
  </div>
</template>
