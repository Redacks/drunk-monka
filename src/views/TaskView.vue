<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import CustomButton from '../components/CustomButton.vue'
import { useStore } from '@/stores/taskStore'
import { storeToRefs } from 'pinia'
import AddTask from '@/components/AddTask.vue'

const tasksStore = useStore()
const { tasks } = storeToRefs(tasksStore)
const newTaskDialogOpen = ref(false)
</script>
<template>
  <div class="flex flex-1 flex-col text-center font-madimiOne text-customWhite">
    <h2 class="mb-6 text-4xl">Aufgaben</h2>
    <div class="flex flex-1 flex-col">
      <div v-if="tasks.length != 0" class="flex flex-col gap-4 px-10">
        <div
          class="shadow-gray flex flex-col items-center justify-between gap-2 rounded-lg bg-gray-700 px-4 py-2 text-xl shadow-md"
          v-for="task in tasks"
          :key="task"
        >
          {{ task }}
          <button class="transition-transform hover:scale-110" @click="tasksStore.removeTask(task)">
            <Icon icon="mingcute:delete-2-fill" class="block h-6 w-6 text-customRed"></Icon>
          </button>
        </div>
      </div>
      <AddTask v-if="newTaskDialogOpen" @close="newTaskDialogOpen = false"></AddTask>
      <div class="my-6 mt-auto flex flex-col gap-6 pt-6">
        <button class="mx-auto" @click="newTaskDialogOpen = true">
          <CustomButton icon="mingcute:task-2-line" text="Aufgabe hinzufügen" color="green" />
        </button>
        <RouterLink to="/" class="mx-auto">
          <CustomButton text="Zurück" color="transparent" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
