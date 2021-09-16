<template>
  <div>
    <!-- Notification app bar -->
    <tool-bar :isDate="true" />

    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4"> <v-icon left> mdi-bell-ring </v-icon>All </v-tab>
      <v-tab> <v-icon left> mdi-email </v-icon>Task </v-tab>
      <v-tab>
        <v-icon left> mdi-email-minus </v-icon>

        <v-badge :content="unread" :value="unread" color="#ED8500">
          Unread
        </v-badge>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-star-circle </v-icon>
        Starred
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">All</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Tasks</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Unread</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Starred</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import NotificationList from "./components/NotificationList.vue";
import DayNight from "@/components/DayNight";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NotificationList,
    ToolBar,
    DayNight,
  },
  data() {
    return {
      unread: 0,
    };
  },
  methods: {
    ...mapActions(["fetchUnreadCount", "fetchAllNotifications"]),
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {
    await this.fetchUnreadCount(this.userToken).then((res) => {
      // Set unread count
      this.unread = res.count;
    });
    await this.fetchAllNotifications(this.userToken)
  },
};
</script>
<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>