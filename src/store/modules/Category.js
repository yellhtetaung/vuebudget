export default {
  state: {
    categories: [],
  },
  mutations: {
    addCategory(state, payload) {
      state.categories.push(payload);
    },
    deleteCategory(state, payload) {
      state.categories.splice(payload, 1);
    },
    setCategory(state, { index, category }) {
      state.categories[index] = category;
    },
  },
  getters: {
    getCategories: (state) => state.categories,
  },
};
