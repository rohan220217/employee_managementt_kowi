<template>
  <div class="task-main-box">
    <v-tabs color="#FF5A5A" left>
      <v-tab>All</v-tab>
      <v-tab>New</v-tab>
      <v-tab>Pending</v-tab>
      <v-tab>Done</v-tab>
      <v-spacer></v-spacer>
      <div
        class="total_task"
        :style="[$vuetify.theme.dark ? { color: 'white' } : { color: 'black' }]"
      >
        Total Tasks: {{getAllTasksCount}}
      </div>
      <v-avatar size="36" class="mt-2">
        <img
          src="https://avatars.githubusercontent.com/u/51409281?v=4"
          alt="user"
        />
      </v-avatar>

      <!-- All tasks -->
      <v-tab-item>
        <all-tasks></all-tasks>
      </v-tab-item>
      <!-- New Tasks -->
      <v-tab-item>
        <new-tasks></new-tasks>
      </v-tab-item>
      <!-- Pending Tasks -->
      <v-tab-item>
        <p>pending</p>
      </v-tab-item>
      <!-- Done Tasks -->
      <v-tab-item>
        <p>COmpleted</p>
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DayNight from "@/components/DayNight";
import AllTasks from "./components/AllTasks";
import NewTasks from "./components/NewTasks";
export default {
  components: {
    NewTasks,
    AllTasks,
    DayNight,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Assigned Task",
          align: "start",
          value: "title",
        },
        { text: "Date/Time", align: "end", value: "createdat" },
        { text: "Status", align: "center", value: "taskstatus" },
      ],
    };
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
.total_task {
  margin-top: 15px;
  margin-right: 20px;
}
</style>