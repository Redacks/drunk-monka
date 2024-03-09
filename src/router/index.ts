import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskView from "@/views/TaskView.vue";
import PlayersView from "@/views/PlayersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/play",
      name: "play",
      component: PlayersView
    },
    {
      path: "/players",
      name: "players",
      component: PlayersView
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TaskView
    },
    {
      path: "/install",
      name: "tasks",
      component: () => import("../views/HowToInstall.vue")
    }
  ]
});

export default router;
