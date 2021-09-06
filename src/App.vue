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
  data(){
    return {

    }
  },
  components: {
    KowiAppBar,
  },
};
</script>
<style>
/* .v-btn__content{
  color: grey !important;
} */
</style>
