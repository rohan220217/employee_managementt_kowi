<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <!-- New task -->
    <div v-if="isReview == 'new'">
      <div v-if="getNewReviewTask.length != 0">
        <h3 style="color: #ff5a5a">New</h3>
        <v-list
          class="pa-0"
          v-for="(reiviewTask, key) in getNewReviewTask"
          :key="`review-${key}`"
          three-line
        >
          <review-tile :data="reiviewTask"></review-tile>
          <v-divider></v-divider>
        </v-list>
      </div>

      <Empty v-else />
    </div>
    <!-- Wating task -->
    <div v-else-if="isReview == 'waiting'">
      <div v-if="getWaitReviewTask.length != 0">
        <h3 style="color: #ff5a5a">Waiting</h3>
        <v-list
          class="pa-0"
          v-for="(reiviewTask, key) in getWaitReviewTask"
          :key="`review-${key}`"
          three-line
        >
          <review-tile :data="reiviewTask"></review-tile>
          <v-divider></v-divider>
        </v-list>
      </div>

      <Empty v-else />
    </div>
    <!-- Completed task -->
    <div v-else-if="isReview == 'completed'">
      <div v-if="getCompReviewTask.length != 0">
        <h3 style="color: #ff5a5a">Completed</h3>
        <v-list
          class="pa-0"
          v-for="(reiviewTask, key) in getCompReviewTask"
          :key="`review-${key}`"
          three-line
        >
          <review-tile :data="reiviewTask"></review-tile>
          <v-divider></v-divider>
        </v-list>
      </div>

      <Empty v-else />
    </div>
    <!-- Disputed task -->
    <div v-else-if="isReview == 'dispute'">
      <div v-if="getDisReviewTask.length != 0">
        <h3 style="color: #ff5a5a">Disputed</h3>
        <v-list
          class="pa-0"
          v-for="(reiviewTask, key) in getDisReviewTask"
          :key="`review-${key}`"
          three-line
        >
          <review-tile :data="reiviewTask"></review-tile>
          <v-divider></v-divider>
        </v-list>
      </div>

      <Empty v-else />
    </div>
  </div>
</template>

<script>
import ReviewTile from "./ReviewTile.vue";
import Loading from "@/components/Loading";
import Empty from "@/components/Empty";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Empty,
    Loading,
    ReviewTile,
  },
  data() {
    return {
      isLoading: false,
      id: null,
    };
  },
  props: {
    isReview: {
      type: String,
    },
  },
  methods: {
    ...mapActions(["fetchNewWaiComTasks"]),
    // getId(value) {
    //     this.id = value
    //   console.log(this.id);
    // },
  },
  computed: {
    ...mapGetters([
      "userToken",
      "getNewReviewTask",
      "getWaitReviewTask",
      "getCompReviewTask",
      "getDisReviewTask",
    ]),
  },
  async created() {
    this.isLoading = true;
    if (this.isReview == "new")
      await this.fetchNewWaiComTasks({ token: this.userToken, query: "new" });
    else if (this.isReview == "waiting")
      await this.fetchNewWaiComTasks({
        token: this.userToken,
        query: "waiting",
      });
    else if (this.isReview == "completed")
      await this.fetchNewWaiComTasks({
        token: this.userToken,
        query: "completed",
      });
    else if (this.isReview == "dispute")
      await this.fetchNewWaiComTasks({
        token: this.userToken,
        query: "dispute",
      });

    this.isLoading = false;
  },
};
</script>
<style>
</style>