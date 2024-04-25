<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "../components/CustomButton.vue";
import { useGameStore } from "@/stores/gameStore";
import { useRouter } from "vue-router";

import StopIcon from "virtual:icons/mingcute/stop-fill";
import NextTaskIcon from "virtual:icons/mingcute/arrow-right-fill";
import ConfirmDialog from "@/components/ConfirmDialog.vue";
import PlayIcon from "virtual:icons/mingcute/play-fill";

const gameStore = useGameStore();
const router = useRouter();

const clearGameData = () => {
  gameStore.clearGameState();
  router.push("/");
};

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
      <div class="my-6 mt-auto flex flex-col gap-10 pt-6">
        <button
          class="mx-auto scale-125"
          @click="currentTask = gameStore.generateRandomTaskAndPlayer()"
        >
          <CustomButton text="Nächste Aufgabe" color="green">
            <NextTaskIcon class="mr-2" />
          </CustomButton>
        </button>

        <ConfirmDialog @cancel="clearGameData">
          <template #default>
            <CustomButton text="Spiel stoppen" color="red">
              <StopIcon class="mr-2" />
            </CustomButton>
          </template>
          <template #confirm>
            <div class="scale-125">
              <CustomButton text="Spiel fortsetzen" color="green">
                <PlayIcon class="mr-2" />
              </CustomButton></div
          ></template>
          <template #cancel>
            <CustomButton text="Spiel beenden" color="red"> <StopIcon class="mr-2" /> </CustomButton
          ></template>
        </ConfirmDialog>
      </div>
    </div>
  </div>
</template>
