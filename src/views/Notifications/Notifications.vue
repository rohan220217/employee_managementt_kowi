<template>
  <div>
    <!-- Notification app bar -->
    <tool-bar :isDate="true" />

    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4"> <v-icon left> mdi-bell-ring </v-icon>All </v-tab>
      <v-tab> <v-icon left> mdi-email </v-icon>Task </v-tab>
      <v-tab>
        <v-icon left> mdi-email-minus </v-icon>

        <v-badge :content="getUnreadCount" :value="getUnreadCount" color="#ED8500">
          Unread
        </v-badge>
      </v-tab>
      <v-tab>
        <v-icon left> mdi-star-circle </v-icon>
        Starred
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <all-notification></all-notification>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <task-notification></task-notification>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <unread-notification></unread-notification>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1" style="height: 80vh">
        <starred-notification></starred-notification>
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import DayNight from "@/components/DayNight";
import NotificationList from "../../components/NotificationTemplate.vue";
import AllNotification from "./components/AllNotification.vue";
import TaskNotification from "./components/TaskNotification.vue";
import UnreadNotification from "./components/UnreadNotification.vue";
import StarredNotification from "./components/StarredNotification.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    StarredNotification,
    UnreadNotification,
    TaskNotification,
    AllNotification,
    NotificationList,
    ToolBar,
    DayNight,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["fetchUnreadCount"]),
  },
  computed: {
    ...mapGetters(["userToken", "getUnreadCount"]),
  },
  async created() {
    await this.fetchUnreadCount(this.userToken);
  },
};
</script>
<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>