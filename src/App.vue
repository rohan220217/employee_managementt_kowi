<template>
  <v-app v-if="!$store.getters.userToken">
    <v-main>
      <login-page></login-page>
    </v-main>
  </v-app>
  <v-app v-else>
    <kowi-app-bar></kowi-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import KowiAppBar from "./components/AppBar.vue";
import LoginPage from "@/views/Authorization/Login";
export default {
  name: "App",

  components: {
    LoginPage,
    KowiAppBar,
  },
  data() {
    return {};
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
