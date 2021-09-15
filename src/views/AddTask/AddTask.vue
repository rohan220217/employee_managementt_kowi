<template>
  <div class="task-main-box">
    <v-tabs color="#FF5A5A" left>
      <v-tab>Task</v-tab>
      <v-tab>Collab</v-tab>
      <v-tab>Review</v-tab>
      <v-spacer></v-spacer>

      <v-avatar size="36" class="mt-2" @click="$router.push({ name: 'Profile' })">
        <img
          src="https://avatars.githubusercontent.com/u/51409281?v=4"
          alt="user"
        />
      </v-avatar>

      <!-- Task -->
      <v-tab-item>
        <new-task></new-task>
      </v-tab-item>
      <!--Collab -->
      <v-tab-item> <collab-task></collab-task> </v-tab-item>
      <!-- Review -->
      <v-tab-item> <p>sdljfdfk</p> </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DayNight from "@/components/DayNight";
import NewTask from "./components/NewTask";
import CollabTask from "./components/Collab";
export default {
  components: {
    CollabTask,
    NewTask,
    DayNight,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions([""]),
  },
  computed: {
    ...mapGetters(["getAllTasksCount"]),
  },
};
</script>

<style>
.task-main-box {
  padding: 0 30px;
}
</style>