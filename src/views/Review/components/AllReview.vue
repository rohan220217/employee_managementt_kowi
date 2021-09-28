<template>
  <Loading v-if="isLoading" />
  <div v-else>
    {{getAllReviewTask}}
    <div v-if="getAllReviewTask.length != 0">
      <h3 style="color: #ff5a5a">All</h3>
      <v-list
        class="pa-0"
        v-for="(reiviewTask, key) in getAllReviewTask"
        :key="`review-${key}`"
        three-line
      >
        <review-tile :data="reiviewTask"></review-tile>
        <v-divider></v-divider>
      </v-list>
    </div>

    <Empty v-else />
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
      id: null
    };
  },
  methods: {
    ...mapActions(["fetchAllReviewTask"]),
    // getId(value) {
    //     this.id = value
    //   console.log(this.id);
    // },
  },
  computed: {
    ...mapGetters(["userToken", "getAllReviewTask"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchAllReviewTask(this.userToken);
    this.isLoading = false;
  },
};
</script>
<style>
</style>