<template>
  <div>
    <!-- Home app bar -->
    <tool-bar />

    <!-- weather & meet -->
    <v-container fluid class="px-8">
      <v-row>
        <v-col cols="12" sm="3">
          <div class="home-box">
            <Greet />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <!-- Meet box -->
          <meet-link></meet-link>
        </v-col>
        <v-col cols="12" sm="3">
          <div class="home-box">
            <div class="box-heading">Check In</div>
            <check-in></check-in>
          </div>
        </v-col>
        <!-- <v-col cols="12" sm="2">
          <div class="home-box">
            <div class="box-heading">Points</div>
          </div>
        </v-col> -->
      </v-row>

      <!-- Recent Notification section -->
      <recent-notifications></recent-notifications>

      <!-- Task section -->
      <v-row class="mt-">
        <!-- Task status -->
        <v-col cols="12" sm="3">
          <div class="home-box-3">
            <div class="box-heading">Task status</div>
            <task-status></task-status>
          </div>
        </v-col>

        <!-- Ongoing task -->
        <v-col cols="12" sm="5">
          <div class="home-box-3">
            <div class="box-heading">On Going Task</div>
            <on-going-task></on-going-task>
          </div>
        </v-col>

        <!-- owl image -->
        <v-col cols="12" sm="4">
          <v-img
            class="owl-image"
            height="286px"
            contain
            src="@/assets/svg/owl.svg"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import DayNight from "@/components/DayNight";
import ToolBar from "@/components/ToolBar.vue";
import RecentNotifications from "./components/RecentNotifications.vue";
import TaskStatus from "./components/TaskStatus.vue";
import MeetLink from "./components/MeetLink.vue";
import CheckIn from "./components/CheckIn.vue";
import Greet from "./components/Greet.vue";
import OnGoingTask from "./components/OnGoingTask.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",

  components: {
    OnGoingTask,
    Greet,
    CheckIn,
    MeetLink,
    TaskStatus,
    RecentNotifications,
    TaskStatus,
    ToolBar,
    DayNight,
  },
  methods: {
    ...mapActions([""]),
    he() {
      console.log("sdfsd");
    },
  },
  computed: {
    // ...mapGetters([""]),
  },
};
</script>
<style scoped>
.box-heading {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 5px;
}
.home-box {
  padding: 10px 20px;
  height: 136px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.home-box-3 {
  min-height: 325px;
  padding: 10px 20px;
  margin-top: 20px;
  /* height: 300px; */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.owl-image {
  margin: 20px;
}
</style>