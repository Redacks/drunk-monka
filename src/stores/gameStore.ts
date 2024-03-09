import { defineStore } from "pinia";
import { usePlayerStore } from "./playerStore";
import { useTaskStore } from "./taskStore";

interface TaskPlayerMap {
  [task: string]: string[];
}

export const useGameStore = defineStore("game", {
  state: () => ({
    taskPlayerMap: {} as TaskPlayerMap,
    lastTask: ""
  }),
  actions: {
    generateRandomTaskAndPlayer() {
      const taskStore = useTaskStore();
      if (taskStore.tasks.length == 0) {
        return "Erstelle erst ein paar Aufgaben!";
      }

      const randomTask = this.getRandomTask();

      if (randomTask.includes("{player}")) {
        let availablePlayers = this.getAvailablePlayersForTask(randomTask);

        if (availablePlayers.length == 0) {
          this.resetPlayersForTask(randomTask);
          availablePlayers = this.getAvailablePlayersForTask(randomTask);
        }

        const randomPlayer = this.getRandomPlayer(availablePlayers);
        this.saveTaskCompletion(randomTask, randomPlayer);
        return randomTask.replace("{player}", randomPlayer);
      } else {
        return randomTask;
      }
    },

    getRandomTask(): string {
      const taskStore = useTaskStore();
      let randomTask;
      do {
        randomTask = taskStore.tasks[Math.floor(Math.random() * taskStore.tasks.length)];
      } while (randomTask == this.lastTask && taskStore.tasks.length > 1);
      this.lastTask = randomTask;
      return randomTask;
    },

    getAvailablePlayersForTask(task: string): string[] {
      const playerStore = usePlayerStore();
      return playerStore.players.filter((player) => !this.taskPlayerMap[task]?.includes(player));
    },

    getRandomPlayer(players: string[]): string {
      return players[Math.floor(Math.random() * players.length)];
    },

    saveTaskCompletion(task: string, player: string) {
      if (!this.taskPlayerMap[task]) {
        this.taskPlayerMap[task] = [];
      }
      this.taskPlayerMap[task].push(player);
    },

    resetPlayersForTask(task: string) {
      if (task in this.taskPlayerMap) {
        this.taskPlayerMap[task] = [];
      }
    },

    getTaskPlayerMap() {
      return this.taskPlayerMap;
    },

    clearGameState() {
      this.taskPlayerMap = {};
    }
  },
  persist: true
});
