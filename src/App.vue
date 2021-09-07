<template>
  <v-app>
    <kowi-app-bar v-if="$store.getters.userToken"></kowi-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import KowiAppBar from "./components/AppBar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    KowiAppBar,
  },
};
</script>
<style>
/* @font-face {
  font-family: "Quicksand";
  src: url("./assets/fonts/Quicksand/Quicksand-Regular.ttf") format("ttf");
}
*{
    font-family: "Quicksand";
 } */
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  font-family: "Quicksand", sans-serif;
}
</style>
