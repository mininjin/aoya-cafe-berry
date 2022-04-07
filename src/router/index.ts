import { ROUTE } from "@/constants/constant";
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const { HOME, BENTO } = ROUTE;

const routes: Array<RouteRecordRaw> = [
  {
    path: HOME,
    name: "home",
    component: HomeView,
  },
  {
    path: BENTO,
    name: "bento",
    // route level code-splitting
    // this generates a separate chunk (bento.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bento" */ "../views/BentoView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
