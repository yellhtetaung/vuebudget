import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Category from "./modules/Category";
import Income from "./modules/Income";
import Expense from "./modules/Expense";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "budget",
    }),
  ],
  modules: {
    Category,
    Income,
    Expense,
  },
});
