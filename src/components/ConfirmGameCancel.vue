<script setup lang="ts">
import { useGameStore } from "@/stores/gameStore";
import CustomButton from "./CustomButton.vue";
import { useRouter } from "vue-router";

import PlayIcon from "virtual:icons/mingcute/play-fill";
import StopIcon from "virtual:icons/mingcute/stop-fill";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const router = useRouter();
const gameStore = useGameStore();

const clearGameData = () => {
  gameStore.clearGameState();
  router.push("/");
};
</script>
<template>
  <div
    class="fixed left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-10">
        <button @click="emit('close')" class="scale-125">
          <CustomButton text="Spiel fortsetzen" color="green">
            <PlayIcon class="mr-2" />
          </CustomButton>
        </button>
        <button @click="clearGameData">
          <CustomButton text="Spiel beenden" color="red">
            <StopIcon class="mr-2" />
          </CustomButton>
        </button>
      </div>
    </div>
  </div>
</template>
