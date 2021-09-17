<template>
  <div class="home-box-2">
    <div class="heading-text">Recent Notifications</div>
    <Loading v-if="isLoading" />
    <div v-else>
      <div v-if="getRecentNotifications.length != 0">
        <v-list-item
          v-for="(notification, key) in getRecentNotifications"
          :key="`notifi-${key}`"
        >
          <v-list-item-avatar>
            <img
              :src="'https://dev.kowi.in' + notification.createdby.pic"
              alt="User"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              <span :style="`color: ${notification.hexcode}`">{{
                notification.createdby.name
              }}</span>
              {{
                notification.task ? "created a new task:" : ".................."
              }}
              “{{ notification.title }}”
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ notification.desc }}</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-action>
            <p class="caption">
              {{ dayjs(notification.time).format("h:mm a") }}
            </p>
          </v-list-item-action>
        </v-list-item>
      </div>

      <div class="text-center caption" v-else>No new notification</div>
    </div>
  </div>
</template>


<script>
import Loading from "@/components/Loading";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchRecentNotifications"]),
  },
  computed: {
    ...mapGetters(["userToken", "getRecentNotifications"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchRecentNotifications(this.userToken);
    this.isLoading = false;
  },
};
</script>
<style>
</style>

<style scoped>
.home-box-2 {
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.heading-text {
  font-weight: 500;
}
</style>