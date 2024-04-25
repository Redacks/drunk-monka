<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "./CustomButton.vue";
import UserAddIcon from "virtual:icons/mingcute/user-add-2-fill";
import { usePresetStore } from "@/stores/presetsStore";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const presetStore = usePresetStore();
const newPresetName = ref("");
const errorMessage = ref("");

const savePreset = (presetName:string) => {
    if(presetName == "Spicy" || presetName == "Basic") {
        errorMessage.value = "Ungültiger Spielername oder Name bereits vorhanden!";
    }
    presetStore.savePreset(presetName);
};
</script>
<template>
  <div
    class="fixed left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-6">
        <input
          type="text"
          v-model="newPresetName"
          class="rounded-2xl border-0 bg-gray-600 p-2 text-center text-xl text-customWhite shadow-none ring-0 focus:border-0 focus:shadow-none focus:ring-0"
          placeholder="Presetname"
        />
        <span v-if="errorMessage" class="text-customRed">{{ errorMessage }}</span>
        <button @click="savePreset(newPresetName)">
          <CustomButton text="Preset speichern!" color="green">
            <UserAddIcon class="mr-2 block h-6 w-6" />
          </CustomButton>
        </button>
        <button @click="emit('close')">
          <CustomButton text="Zurück" color="transparent" />
        </button>
      </div>
    </div>
  </div>
</template>
