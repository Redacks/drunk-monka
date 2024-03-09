import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as string[]
  }),
  actions: {
    addTask(task: string): boolean {
      if (!this.tasks.includes(task) && task.trim() != "") {
        this.tasks = [...this.tasks, task.trim()];
        return true;
      }
      return false;
    },
    removeTask(task: string) {
      this.tasks = this.tasks.filter((value) => value != task);
    },
    getTasks() {
      return this.tasks;
    }
  },
  persist: true
});
