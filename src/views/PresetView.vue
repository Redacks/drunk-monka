<script setup lang="ts">
import CustomButton from "../components/CustomButton.vue";
import DeleteIcon from "virtual:icons/mingcute/delete-2-fill";
import { usePresetStore } from "@/stores/presetsStore";
import LoadTasks from "virtual:icons/mingcute/upload-line";
import SaveTasks from "virtual:icons/mingcute/save-2-line";
import { systemPresets } from "@/stores/presetsStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import ConfirmDialog from "@/components/ConfirmDialog.vue";

const newPresetName = ref("");

const presetStore = usePresetStore();
const { presets } = storeToRefs(presetStore);
</script>
<template>
  <div class="flex flex-1 flex-col text-center font-madimiOne text-customWhite">
    <h2 class="mb-6 text-4xl">Presets</h2>
    <div class="flex flex-1 flex-col">
      <div v-if="Object.keys(presets).length != 0" class="mb-8 flex flex-col gap-4 px-10">
        <div
          class="shadow-gray flex flex-col items-center justify-between gap-2 rounded-lg bg-gray-700 px-4 py-4 text-xl shadow-md"
          v-for="preset in Object.keys(presets)"
          :key="preset"
        >
          {{ preset }}
          <div
            class="flex w-[80%] flex-row justify-between border-t-2 border-solid border-customWhite py-4"
          >
            <ConfirmDialog @confirm="presetStore.loadPreset(preset)">
              <template #default>
                <div class="mx-auto text-customWhite transition-transform hover:scale-110">
                  <LoadTasks class="block h-7 w-7" />
                </div>
              </template>
              <template #confirm>
                <CustomButton text="Preset laden!" color="green">
                  <LoadTasks class="block h-6 w-6" />
                </CustomButton>
              </template>
              <template #cancel>
                <CustomButton text="Abbrechen" color="transparent" />
              </template>
            </ConfirmDialog>
            <template v-if="!systemPresets.includes(preset)">
              <ConfirmDialog @confirm="presetStore.savePreset(preset)">
                <template #default>
                  <div class="mx-auto text-customWhite transition-transform hover:scale-110">
                    <SaveTasks class="block h-7 w-7 text-customGreen" />
                  </div>
                </template>
                <template #confirm>
                  <CustomButton text="Preset überschreiben?" color="green">
                    <SaveTasks class="block h-7 w-7" />
                  </CustomButton>
                </template>
                <template #cancel>
                  <CustomButton text="Abbrechen" color="transparent" />
                </template>
              </ConfirmDialog>
              <ConfirmDialog @confirm="presetStore.deletePreset(preset)">
                <template #default>
                  <div class="mx-auto text-customWhite transition-transform hover:scale-110">
                    <DeleteIcon class="block h-7 w-7 text-customRed" />
                  </div>
                </template>
                <template #confirm>
                  <CustomButton text="Preset löschen!" color="red">
                    <DeleteIcon class="block h-7 w-7" />
                  </CustomButton>
                </template>
                <template #cancel>
                  <CustomButton text="Abbrechen" color="transparent" />
                </template>
              </ConfirmDialog>
            </template>
          </div>
        </div>
      </div>
      <div class="mt-auto flex w-full flex-col gap-4 px-2">
        <input
          type="text"
          v-model="newPresetName"
          class="mx-auto rounded-2xl border-0 bg-gray-600 p-2 text-center text-xl text-customWhite shadow-none ring-0 focus:border-0 focus:shadow-none focus:ring-0"
          placeholder="Presetname"
        />
        <button
          @click="
            presetStore.savePreset(newPresetName);
            newPresetName = '';
          "
          :disabled="
            !!presetStore.getPresets()[newPresetName] || systemPresets.includes(newPresetName)
          "
          class="mx-auto"
        >
          <CustomButton
            text="Speichern"
            :color="
              !presetStore.getPresets()[newPresetName] && !systemPresets.includes(newPresetName)
                ? 'green'
                : 'gray'
            "
          />
        </button>
      </div>
      <div class="mb-4 mt-2 flex flex-col gap-6 pt-6">
        <RouterLink to="/tasks" class="mx-auto">
          <CustomButton text="Zurück" color="transparent" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
