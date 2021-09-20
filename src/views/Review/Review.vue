<template>
  <div>
    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4">
        <v-icon left> mdi-checkbox-multiple-marked </v-icon>All
      </v-tab>
      <v-tab> <v-icon left> mdi-file-plus </v-icon>New </v-tab>
      <v-tab>
        <v-avatar size="25" class="mr-2">
          <img src="@/assets/animated_icon/error.gif" alt="error" />
        </v-avatar>
        Dispute
      </v-tab>
      <v-tab>
        <v-avatar size="25" class="mr-2">
          <img src="@/assets/animated_icon/clock.gif" alt="clock" />
        </v-avatar>
        Waiting
      </v-tab>
      <v-tab>
        <v-icon left color="#32973C">mdi-check-circle-outline</v-icon>
        Complete
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1">
        <all-review></all-review>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <p>sldkfjsdlfk</p>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <p>sldkfjsdlfk</p>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <p>sldkfjsdlfk</p>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <p>sldkfjsdlfk</p>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AllReview from "./components/AllReview.vue";
export default {
  components: {
    AllReview,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([""]),
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {
    // await this.fetchUnreadCount(this.userToken);
  },
};
</script>
<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>