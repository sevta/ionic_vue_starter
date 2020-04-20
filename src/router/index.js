import Vue from "vue";
import Home from "../views/Home.vue";
import Tabs from "../views/Tabs";
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter);

const routes = [
  { path: "/", redirect: "/tabs" },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
    redirect: "/tabs/tab1",
    children: [
      {
        path: "/tabs/tab1",
        name: "tab1",
      },
      {
        path: "/tabs/tab2",
        name: "tab2",
      },
    ],
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new IonicVueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
