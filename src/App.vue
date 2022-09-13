<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { BottomNav },
};
</script>
