<template>
  <div>
    <!-- Notification app bar -->
    <tool-bar :isDate="true" :isAvatar="false" />

    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4">
        <v-icon left> mdi-account </v-icon>
        Profile
      </v-tab>
      <v-tab> <v-icon left> mdi-account-edit </v-icon>Edit Profile </v-tab>
      <v-tab> <v-icon left> mdi-cog </v-icon>Change Password </v-tab>
      <v-tab>
        <v-icon left> mdi-account-check </v-icon>
        Attendance
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1">
        <user-profile></user-profile>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Tasks</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <p>sldfkjsdlf</p>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Unread</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <p>sldfkjsdlf</p>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
       <user-attendance></user-attendance>
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import UserProfile from "./components/UserProfile.vue";
import UserAttendance from "./components/UserAttendance.vue";
import DayNight from "@/components/DayNight";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    UserAttendance,
    UserProfile,
    ToolBar,
    DayNight,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchUnreadCount"]),
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {},
};
</script>
<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>