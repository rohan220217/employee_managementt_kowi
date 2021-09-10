<template>
  <v-app-bar dense app :color="$vuetify.theme.dark ? '#363636' : 'white'" elevation="1">
    <v-btn text small @click="backButton()"> Back </v-btn>
    <v-spacer></v-spacer>
    <div
      class="mr-4"
      :style="[$vuetify.theme.dark ? { color: 'white' } : { color: 'black' }]"
    >
      Total Tasks: {{ getAllTasksCount }}
    </div>
    <v-avatar size="36" class="">
      <img
        src="https://avatars.githubusercontent.com/u/51409281?v=4"
        alt="user"
      />
    </v-avatar>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions([""]),
    backButton() {
      window.history.back();
    },
  },
  computed: {
    ...mapGetters(["getAllTasksCount"]),
  },
};
</script>

<style>
</style>