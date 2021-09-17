<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <div v-if="getUnreadNotifications.length != 0">
      <h3 style="color: #ff5a5a">Unread</h3>
      <v-list
        class="pa-0"
        v-for="(notification, key) in getUnreadNotifications"
        :key="`notifi-${key}`"
        three-line
      >
        <notification-list :data="notification"></notification-list>
        <v-divider></v-divider>
      </v-list>
    </div>
    <v-img
      v-else
      height="100vh"
      contain
      width="100%"
      src="@/assets/svg/empty.svg"
    ></v-img>
  </div>
</template>

<script>
import NotificationList from "./NotificationList.vue";
import Loading from "@/components/Loading";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NotificationList,
    Loading,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchQueryNotifications", "read2UnreadNotification"]),
  },
  computed: {
    ...mapGetters(["userToken", "getUnreadNotifications"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchQueryNotifications({
      token: this.userToken,
      query: "unread",
    });
    await this.read2UnreadNotification(this.userToken);
    this.isLoading = false;
  },
};
</script>
<style>
</style>