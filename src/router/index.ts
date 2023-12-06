import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import { App } from "vue";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/reg",
    component: () => import("@/views/reg/index.vue"),
  },
  // 内容页
  // 首页
  {
    path: "/home",
    component: () => import("@/layouts/default.vue"),
    redirect: "/home/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
      },
    ],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
