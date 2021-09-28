<template>
  <div
    class="start-button"
    v-if="taskstatus == 'pending'"
    style="background-color: #ff5a5a;"
  >
    <!-- <div v-if="taskstatus == 'pending'">Start Now</div>
    <div>
      <span v-if="days">{{ days }} : </span>
      <span v-if="hours">{{ hours | formatTime }} : </span>
      <span>{{ minutes | formatTime }} : {{ seconds | formatTime }}</span>
    </div> -->
    <div @click="startButton()">Start Now</div>
  </div>
  <div
    class="start-button"
    v-else-if="taskstatus == 'ongoing'"
    style="background-color: #ff5a5a;"
  >
    <div>
      <span v-if="days">{{ days }} : </span>
      <span v-if="hours">{{ hours | formatTime }} : </span>
      <span>{{ minutes | formatTime }} : {{ seconds | formatTime }}</span>
    </div>
  </div>
  <div
    class="start-button"
    v-else-if="taskstatus == 'dispute'"
    style="background-color: grey"
  >
    <div>{{dayjs(disputetime).format("hh:mm:ss A ")}}</div>
  </div>
  <div
    class="start-button"
    v-else-if="taskstatus == 'completed'"
    style="background-color: #32973C"
  >
    <div>Completed</div>
  </div>
</template>

<script>
import { mapGetters, mapActions, createNamespacedHelpers } from "vuex";
export default {
  data() {
    return {
      remaining_time: 0,
      speed: 1000,
    };
  },
  props: ["endtime", "taskstatus", "taskid", "starttime", "disputetime"],
  mounted() {
    console.log("mounted");
    setTimeout(this.countdown, 1000);
  },
  methods: {
    ...mapActions(["startTask"]),
    countdown() {
      var bool = -1;
      // Date.parse(
      //   this.dayjs("2021-09-22T20:45:00.000Z").format("DD MMM YYYY H:m:ss ")
      // ) - Date.parse(new Date());

      // if (bool <= 0) {
      this.remaining_time =
        Date.parse(this.dayjs(this.endtime).format("DD MMM YYYY H:m:ss ")) -
        Date.parse(new Date());
      if (this.remaining_time > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.remaining_time = null;
      }
      // }
    },

    startButton() {
      console.log("rohn");
      // setTimeout(this.countdown, 1000);
      this.startTask({ token: this.userToken, data: this.taskid }).then((res) =>
        // this.countdown()
        // Refresh page
        location.reload()
      );
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
    seconds() {
      return Math.floor((this.remaining_time / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.remaining_time / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.remaining_time / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.remaining_time / (1000 * 60 * 60 * 24));
    },
  },

  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    },
  },
};
</script>

<style scoped>
.start-button {
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 150px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  /* background-color: #ff5a5a; */
  float: right;
  cursor: pointer;
}
</style>