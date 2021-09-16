<template>
  <!-- <v-app v-if="!$store.getters.userToken">
    <v-main>
      <login-page></login-page>
    </v-main>
  </v-app> -->
  <v-app>
    <kowi-app-bar  v-if="$store.getters.userToken"></kowi-app-bar>
    <v-main>
      <!-- <v-slide-x-transition mode="in-out"> -->
      <router-view />
      <!-- </v-slide-x-transition> -->
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
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: gray !important;
}

.theme--light.v-label {
  color: #ffcbcb !important;
}
.v-subheader {
  height: 24px !important;
  padding: 0 !important;
}
.v-text-field--solo {
  border-radius: 10px !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: 0 0 8px #e0e0e0 !important;
}
</style>
