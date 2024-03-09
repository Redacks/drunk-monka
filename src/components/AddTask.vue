<script setup lang="ts">
import { ref } from "vue";
import CustomButton from "./CustomButton.vue";
import { useTaskStore } from "@/stores/taskStore";
import AddTaskIcon from "virtual:icons/mingcute/task-2-line";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const tasksStore = useTaskStore();
const newTaskText = ref("");
const errorMessage = ref("");

const addNewTask = (task: string) => {
  if (tasksStore.addTask(task)) {
    errorMessage.value = "";
    emit("close");
  } else {
    errorMessage.value = "Ungültige Aufgabe";
  }
};
</script>
<template>
  <div
    class="fixed left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-primary"
  >
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center">
      <div class="relative mx-auto flex flex-col items-center gap-6">
        <textarea
          type="text"
          v-model="newTaskText"
          class="resize-y rounded-2xl border-0 bg-gray-600 p-4 text-xl text-customWhite shadow-none ring-0 focus:border-0 focus:shadow-none focus:ring-0"
          placeholder="Aufgabe eingeben

Für Spielernamen {player} eingeben"
          rows="5"
          resiz
        ></textarea>
        <span v-if="errorMessage" class="text-customRed">{{ errorMessage }}</span>
        <button @click="addNewTask(newTaskText)">
          <CustomButton text="Aufgabe hinzufügen" color="green">
            <AddTaskIcon class="mr-2 block h-6 w-6" />
          </CustomButton>
        </button>
        <button @click="emit('close')">
          <CustomButton text="Zurück" color="transparent" />
        </button>
      </div>
    </div>
  </div>
</template>
