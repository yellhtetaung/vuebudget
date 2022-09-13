export default {
  state: {
    incomes: [],
  },
  mutations: {
    addIncome(state, payload) {
      state.incomes.push(payload);
    },
    deleteIncome(state, payload) {
      state.incomes.splice(payload, 1);
    },
    setIncome(state, { index, income }) {
      state.incomes[index] = income;
    },
  },
  getters: {
    getIncomes: (state) => state.incomes,
  },
};
