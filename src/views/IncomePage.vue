<template>
  <v-container>
    <v-row class="justify-center mt-3">
      <h3>Create New Income</h3>
      <v-col cols="10">
        <v-text-field type="number" label="Amount" v-model="income.amount" />
        <v-autocomplete
          :items="$store.getters.getCategories"
          v-model="income.category"
          clearable
          label="Choose Category"
        />
        <v-btn class="d-block mx-auto" @click="addIncome">
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-3">
      <v-col cols="10">
        <v-list subheader>
          <v-subheader>Recent Income</v-subheader>
          <v-list-item
            v-for="(income, index) in $store.getters.getIncomes"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ income.amount }}</v-list-item-title>
              <v-list-item-subtitle>{{ income.category }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-btn text @click="editIncome(index)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn text @click="deleteIncome(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>Recent Income</v-card-title>
        <v-card-text>
          <v-text-field
            type="number"
            label="Amount"
            v-model="edit_income.amount"
          />
          <v-autocomplete
            label="Choose Category"
            :items="$store.getters.getCategories"
            v-model="edit_income.category"
            clearable
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="updateIncome">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "IncomePage",
  data: () => ({
    income: {
      amount: "",
      category: "",
    },
    dialog: false,
    edit_income: "",
    edit_index: "",
  }),
  methods: {
    addIncome() {
      if (this.income.amount === "") {
        return alert("Income amount is required");
      } else if (this.income.category === "") {
        return alert("Income category is required");
      } else {
        this.$store.commit("addIncome", this.income);
        this.income = {
          amount: "",
          category: "",
        };
      }
    },
    editIncome(index) {
      this.dialog = true;
      this.edit_income = this.$store.getters.getIncomes[index];
      this.edit_index = index;
    },
    deleteIncome(index) {
      if (confirm("Are you sure")) {
        this.$store.commit("deleteIncome", index);
      }
    },
    updateIncome() {
      this.$store.commit("setIncome", {
        index: this.edit_index,
        income: this.edit_income,
      });
      this.dialog = false;
    },
  },
};
</script>
