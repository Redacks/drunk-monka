<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './CustomButton.vue'
import { useStore } from '@/stores/playerStore'
import { storeToRefs } from 'pinia'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const playerStore = useStore()
const newPlayerName = ref('')
const errorMessage = ref('')

const addNewPlayer = (player: string) => {
  if (playerStore.addPlayer(player)) {
    errorMessage.value = ''
    emit('close')
  } else {
    errorMessage.value = 'Ungültiger Spielername oder Name bereits vorhanden!'
  }
}
</script>
<template>
  <div
    class="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-6">
        <input
          type="text"
          v-model="newPlayerName"
          class="rounded-full border-0 bg-gray-600 p-2 text-center text-xl text-customWhite shadow-none ring-0 focus:border-0 focus:shadow-none focus:ring-0"
          placeholder="Spielername"
        />
        <span v-if="errorMessage" class="text-customRed">{{ errorMessage }}</span>
        <button @click="addNewPlayer(newPlayerName)">
          <CustomButton text="Spieler hinzufügen" icon="mingcute:user-add-2-fill" color="green" />
        </button>
        <button @click="emit('close')">
          <CustomButton text="Zurück" color="transparent" />
        </button>
      </div>
    </div>
  </div>
</template>
