<template>
  <v-app-bar
    dense
    app
    :color="$vuetify.theme.dark ? '#363636' : 'white'"
    elevation="1"
  >
    <h3 v-if="isDate">{{ dayjs().format("dddd, DD MMM YYYY ") }}</h3>
    <v-btn v-if="isBack" text small @click="backButton()"> Back </v-btn>
    <v-spacer></v-spacer>
    <div
      v-if="isTaskCount"
      class="mr-4"
      :style="[$vuetify.theme.dark ? { color: 'white' } : { color: 'black' }]"
    >
      Total Tasks: {{ getAllTasksCount }}
    </div>
    <v-avatar
      v-if="isAvatar"
      size="36"
      class=""
      @click="$router.push({ name: 'Profile' })"
    >
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
  props: {
    isDate: {
      type: Boolean,
      default: false,
    },
    isAvatar: {
      type: Boolean,
      default: true,
    },
    isBack: {
      type: Boolean,
      default: false,
    },
    isTaskCount: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>