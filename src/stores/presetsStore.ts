import { defineStore } from "pinia";
import { useTaskStore } from "./taskStore";

interface Presets {
  [name: string]: string[] | undefined;
}

export const systemPresets = ["Risky", "Standart"];

export const usePresetStore = defineStore("preset", {
  state: () => ({
    presets: {} as Presets
  }),
  actions: {
    savePreset(name: string) {
      if (!name.trim()) return;
      const taskStore = useTaskStore();
      this.presets[name.trim()] = taskStore.getTasks();
    },
    loadPreset(name: string) {
      const presetTasks = this.presets[name];
      if (!presetTasks) {
        return false;
      } else {
        const taskStore = useTaskStore();
        taskStore.setTasks(presetTasks);
      }
    },
    deletePreset(name: string) {
      if (!systemPresets.includes(name)) delete this.presets[name];
    },
    getPresets() {
      return this.presets;
    }
  },
  persist: true
});
