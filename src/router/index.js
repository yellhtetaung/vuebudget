import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/DashboardPage"),
  },
  {
    path: "/Expense",
    name: "expense",
    component: () => import("../views/ExpensePage"),
  },
  {
    path: "/Income",
    name: "income",
    component: () => import("../views/IncomePage"),
  },
  {
    path: "/Category",
    name: "category",
    component: () => import("../views/CategoryPage"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
