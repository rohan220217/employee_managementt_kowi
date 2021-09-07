<template>
  <div>
    <!-- Home app bar -->
    <app-bar />

    <!-- weather & meet -->
    <v-container fluid class="px-8">
      <v-row>
        <v-col cols="12" sm="3">
          <div class="home-box">
            <div class="date-time">{{ dayjs() }}</div>
            <v-row>
              <v-col>
                <div class="greet">
                  Good <br />
                  Morning
                </div>
                <div class="user-name">Rohan</div>
              </v-col>
              <v-col>
                <v-img contain src="@/assets/svg/cloud.svg" height="75" />
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="5">
          <div class="home-box">
            <v-row>
              <v-col>
                <div class="join-meet">Join Meet</div>
              </v-col>
              <v-col>
                <div class="join-button">Join</div>
              </v-col>
            </v-row>
            <div
              class="meet-link-box"
              :style="[
                $vuetify.theme.dark
                  ? { backgroundColor: '#363636' }
                  : { backgroundColor: '#f0f0f0' },
              ]"
            >
              <div class="meet-link">https://meet.google.com/frn-kvyh-yyj</div>
              <div class="meet-button">
                <v-btn icon color="#FF5A5A">
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="2">
          <div class="home-box">
            <div class="join-meet">Check In</div>
          </div>
        </v-col>
        <v-col cols="12" sm="2">
          <div class="home-box">
            <div class="join-meet">Points</div>
          </div>
        </v-col>
      </v-row>

      <!-- Recent Notification section -->
      <recent-notifications></recent-notifications>

      <!-- Task section -->
      <v-row class="mt-">
        <v-col cols="12" sm="3">
          <div class="home-box-3"> <div class="join-meet">Task status</div></div>
        </v-col>
        <v-col cols="12" sm="5">
          <div class="home-box-3"><div class="join-meet">On Going Task</div></div>
        </v-col>
        <v-col cols="12" sm="4">
        <v-img class="owl-image" height="286px" contain src="@/assets/svg/owl.svg">

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
import AppBar from "./components/AppBar.vue";
import TaskStatus from "./components/TaskStatus.vue";
import RecentNotifications from "./components/RecentNotifications.vue";

export default {
  name: "Home",
  components: {
    RecentNotifications,
    TaskStatus,
    AppBar,
    DayNight,
  },

  methods: {
    he() {
      console.log("sdfsd");
    },
  },
};
</script>
<style scoped>
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
  padding: 10px 20px;
  margin-top: 20px;
  height: 286px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.date-time {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 5px;
}
.greet {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 25px;
}
.user-name {
  font-size: 1.5rem;
  font-weight: 600;
}
.join-meet {
  font-size: 1rem;
  font-weight: 500;
}
.join-button {
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 150px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background-color: #ff5a5a;
  float: right;
}
.meet-link-box {
  margin-top: 15px;
  padding: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 20px;
  height: 54px;
  /* background-color: #f0f0f0; */
  /* background-color: #363636; */

  position: relative;
}
.meet-link {
  font-weight: 500;
}
.meet-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
.owl-image{
  margin: 20px;
}
</style>