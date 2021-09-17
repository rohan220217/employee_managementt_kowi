<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <div v-if="getStarredNotifications.length != 0">
      <h3 style="color: #ff5a5a">Starred</h3>
      <v-list
        class="pa-0"
        v-for="(notification, key) in getStarredNotifications"
        :key="`notifi-${key}`"
        three-line
      >
        <notification-template :data="notification"></notification-template>
        <v-divider></v-divider>
      </v-list>
    </div>
   
    <Empty v-else />
  </div>
</template>

<script>
import NotificationTemplate from "@/components/NotificationTemplate.vue";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Empty,
    Loading,
    NotificationTemplate,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchQueryNotifications"]),
  },
  computed: {
    ...mapGetters(["userToken", "getStarredNotifications"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchQueryNotifications({
      token: this.userToken,
      query: "starred",
    });
    this.isLoading = false;
  },
};
</script>
<style>
</style>