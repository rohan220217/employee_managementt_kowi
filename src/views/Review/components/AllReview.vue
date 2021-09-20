<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <!-- <div v-if="getAllNotifications.length != 0">
      <h3 style="color: #ff5a5a">All</h3>
      <v-list
        class="pa-0"
        v-for="(notification, key) in getAllNotifications"
        :key="`notifi-${key}`"
        three-line
      >
        <review-tile @id="getId" :data="notification"></review-tile>
        <v-divider></v-divider>
      </v-list>
    </div> -->
    <review-detail></review-detail>

    <!-- <Empty v-else /> -->
  </div>
</template>

<script>
import ReviewTile from "./ReviewTile.vue";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import ReviewDetail from "../ReviewDetail.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Empty,
    Loading,
    ReviewTile,
    ReviewDetail,
  },
  data() {
    return {
      isLoading: false,
      id: null
    };
  },
  methods: {
    ...mapActions(["fetchAllNotifications"]),
    getId(value) {
        this.id = value
      console.log(this.id); // Raja Tamil
    },
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