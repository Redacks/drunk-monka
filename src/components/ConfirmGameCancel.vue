<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const clearGameData = () => {
  //TODO: Clear GameData
}
</script>
<template>
  <div
    class="fixed left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-6">
        <button @click="clearGameData">
          <CustomButton text="Spiel fortsetzen" icon="mingcute:play-fill" color="green" />
        </button>
        <button @click="router.push('/')">
          <CustomButton text="Spiel beenden" color="red" />
        </button>
      </div>
    </div>
  </div>
</template>
