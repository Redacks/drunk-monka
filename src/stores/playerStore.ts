import { defineStore } from "pinia";

export const usePlayerStore = defineStore("players", {
  state: () => ({
    players: [] as string[]
  }),
  actions: {
    addPlayer(player: string): boolean {
      if (!this.players.includes(player) && player.trim() != "") {
        this.players = [...this.players, player.trim()];
        return true;
      }
      return false;
    },
    removePlayer(player: string) {
      this.players = this.players.filter((value) => value != player);
    },
    getPlayers() {
      return this.players;
    }
  },
  persist: true
});
