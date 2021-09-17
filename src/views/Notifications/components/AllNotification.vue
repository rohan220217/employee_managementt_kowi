<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <div v-if="getAllNotifications.length != 0">
      <h3 style="color: #ff5a5a">All</h3>
      <v-list
        class="pa-0"
        v-for="(notification, key) in getAllNotifications"
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
    Loading,
    NotificationList,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchAllNotifications"]),
  },
  computed: {
    ...mapGetters(["userToken", "getAllNotifications"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchAllNotifications(this.userToken);
    this.isLoading = false;
  },
};
</script>
<style>
</style>