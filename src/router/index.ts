import { createRouter, createWebHistory } from "vue-router";
import PlayView from "../views/PlayView.vue";
import HomeView from "../views/HomeView.vue";
import PlayersView from "../views/PlayersView.vue";
import TaskView from "../views/TaskView.vue";
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
      component: PlayView
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
      name: "howtoinstall",
      component: () => import("../views/HowToInstall.vue")
    }
  ]
});

export default router;
