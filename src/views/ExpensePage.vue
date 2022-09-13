<template>
  <v-container>
    <v-row class="justify-center mt-3">
      <h3>Create New Expense</h3>
      <v-col cols="10">
        <v-text-field type="number" label="Amount" v-model="expense.amount" />
        <v-autocomplete
          label="Choose Category"
          :items="$store.getters.getCategories"
          v-model="expense.category"
          clearable
        />
        <v-btn class="d-block mx-auto" @click="addExpense">
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-3">
      <v-col cols="10">
        <v-list subheader>
          <v-subheader>Recent Expense</v-subheader>
          <v-list-item
            v-for="(expense, index) in $store.getters.getExpenses"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ expense.amount }}</v-list-item-title>
              <v-list-item-subtitle>{{
                expense.category
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn text @click="editExpense(index)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn text @click="deleteExpense(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>Recent Expense</v-card-title>
        <v-card-text>
          <v-text-field
            type="number"
            label="Amount"
            v-model="edit_expense.amount"
          />
          <v-autocomplete
            :items="$store.getters.getCategories"
            v-model="edit_expense.category"
            label="Choose Category"
            clearable
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="updateExpense">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "ExpensePage",
  data: () => ({
    expense: {
      amount: "",
      category: "",
    },
    dialog: false,
    edit_expense: "",
    edit_index: "",
  }),
  methods: {
    addExpense() {
      if (this.expense.amount === "") {
        return alert("Expense amount is required");
      } else if (this.expense.category === "") {
        return alert("Expense category is required");
      } else {
        this.$store.commit("addExpense", this.expense);
        this.expense = {
          amount: "",
          category: "",
        };
      }
    },
    editExpense(index) {
      this.dialog = true;
      this.edit_expense = this.$store.getters.getExpenses[index];
      this.edit_index = index;
    },
    deleteExpense(index) {
      if (confirm("Are you sure")) {
        this.$store.commit("deleteExpense", index);
      }
    },
    updateExpense() {
      this.$store.commit("setExpense", {
        index: this.edit_index,
        expense: this.edit_expense,
      });
      this.dialog = false;
    },
  },
};
</script>
