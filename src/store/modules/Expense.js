export default {
  state: {
    expenses: [],
  },
  mutations: {
    addExpense(state, payload) {
      state.expenses.push(payload);
    },
    deleteExpense(state, payload) {
      state.expenses.splice(payload, 1);
    },
    setExpense(state, { index, expesne }) {
      state.expenses[index] = expesne;
    },
  },
  getters: {
    getExpenses: (state) => state.expenses,
  },
};
