<template>
  <v-list-item @click="openReview()">
    <!-- { "id": 12, "title": "Test", "taskstatus": "dispute", "starttim": null,
    "endtim": null, "assignedby": { "role": null, "pic":
    "/media/defaultpic.jpg", "name": "ekesel", "colorhex": null },
    "iscompleted": false, "isreadreview": false } -->

    <!-- <v-list-item-avatar size="55">
      <img :src="'https://dev.kowi.in' + data.createdby.pic" alt="User" />
    </v-list-item-avatar> -->
    <v-list-item-content>
      <v-list-item-title class="">
        <div class="mb-1"><strong> Title: </strong>{{ data.title }}</div>
        <div class="mb-1">
          <strong>Assigned By: </strong>
          <span :style="`color: ${data.assignedby.colorhex}`">{{
            data.assignedby.name
          }}</span>
        </div>
        <div v-if="data.assignedto">
          <strong>Assigned to: </strong>
          <span :style="`color: ${data.assignedto.colorhex}`">{{
            data.assignedto.name
          }}</span>
        </div>
      </v-list-item-title>

      <v-list-item-subtitle>
        <!-- <v-btn outlined color="#ff5a5a" small @click="openReview()"
          >Review</v-btn
        > -->
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <p class="caption mb-0">
        Start: {{ dayjs(data.starttim).format("DD-MM-YY, h:mm a") }}
      </p>
      <p class="caption mb-0">
        End:
        {{ dayjs(data.endtim).format("DD-MM-YY, h:mm a") }}
      </p>
      <div v-if="data.taskstatus == 'completed'" style="color: #32973c">
        <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
        <v-icon color="#32973C" size="20">mdi-check-circle-outline</v-icon>
        Completed
      </div>
      <div v-if="data.taskstatus == 'dispute'" style="color: #2634af">
        <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
        <v-avatar size="30">
          <img src="@/assets/animated_icon/error.gif" alt="dispute" />
        </v-avatar>
        Dispute
      </div>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["data"],

  methods: {
    ...mapActions([""]),
    openReview() {
      this.$router.push({ name: "Review" });
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  created() {},
};
</script>

<style>
</style>