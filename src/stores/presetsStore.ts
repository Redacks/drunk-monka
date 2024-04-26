import { defineStore } from "pinia";
import { useTaskStore } from "./taskStore";
import { basicPresetTasks } from "@/constants/basicPreset";

interface Presets {
  [name: string]: string[] | undefined;
}

export const systemPresets = ["Risky", "Basic"];

export const usePresetStore = defineStore("preset", {
  state: () => ({
    presets: { Basic: basicPresetTasks } as Presets
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
