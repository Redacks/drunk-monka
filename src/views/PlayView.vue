<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../components/CustomButton.vue";
import ConfirmGameCancel from "@/components/ConfirmGameCancel.vue";
import { useGameStore } from "@/stores/gameStore";

import StopIcon from "virtual:icons/mingcute/stop-fill";
import NextTaskIcon from "virtual:icons/mingcute/arrow-right-fill";

const gameStore = useGameStore();
const openConfirmGameCancel = ref(false);

const currentTask = ref(
  'Drücke "Nächste Aufgabe" um die erste Aufgabe zu erhalten.\n\n Viel Spaß!'
);
</script>
<template>
  <div class="flex flex-1 flex-col text-center font-madimiOne text-customWhite">
    <div class="mx-[7vw] flex flex-1 flex-col">
      <div class="flex w-full flex-1 items-center justify-center">
        <div class="min-w-[50vw] whitespace-pre-wrap rounded-2xl bg-gray-600 p-4 text-2xl">
          {{ currentTask }}
        </div>
      </div>
      <ConfirmGameCancel v-if="openConfirmGameCancel" @close="openConfirmGameCancel = false" />
      <div class="my-6 mt-auto flex flex-col gap-10 pt-6">
        <button
          class="mx-auto scale-125"
          @click="currentTask = gameStore.generateRandomTaskAndPlayer()"
        >
          <CustomButton text="Nächste Aufgabe" color="green">
            <NextTaskIcon class="mr-2" />
          </CustomButton>
        </button>
        <button class="mx-auto" @click="openConfirmGameCancel = true">
          <CustomButton text="Spiel stoppen" color="red">
            <StopIcon class="mr-2" />
          </CustomButton>
        </button>
      </div>
    </div>
  </div>
</template>
