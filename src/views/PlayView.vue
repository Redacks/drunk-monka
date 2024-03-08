<script setup lang="ts">
import CustomButton from '../components/CustomButton.vue'
</script>
<template>
  <div class="flex flex-1 flex-col text-center font-madimiOne text-customWhite">
    <div class="flex flex-1 flex-col">
      <div class="my-6 mt-auto flex flex-col gap-10 pt-6">
        <button class="scale mx-auto scale-125">
          <CustomButton text="Nächste Aufgabe" color="green" icon="mingcute:arrow-right-fill" />
        </button>
        <RouterLink to="/" class="mx-auto">
          <CustomButton text="Spiel stoppen" color="red" icon="mingcute:stop-fill" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
