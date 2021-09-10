<template>
  <v-app-bar dense app :color="$vuetify.theme.dark ? '#363636' : 'white'" elevation="1">
    <!-- Timer component  -->
    <!-- <div v-if="remaining_time">
      <span v-if="days">{{ days }} : </span>
      <span v-if="hours">{{ hours | formatTime }} : </span>
      <span>{{ minutes | formatTime }} : {{ seconds | formatTime }}</span>
    </div> -->
    <v-spacer></v-spacer>
    <v-avatar size="36">
      <img
        src="https://avatars.githubusercontent.com/u/51409281?v=4"
        alt="user"
      />
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      remaining_time: 10,
      speed: 1000,
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  methods: {
    countdown() {
      var bool = 10;
      // Date.parse(
      //   this.dayjs(this.quiz_main.start_time).format("DD MMM YYYY H:m:ss ")
      // ) - Date.parse(new Date());

      if (bool <= 0) {
        this.remaining_time =
          Date.parse(
            this.dayjs(this.quiz_main.end_time).format("DD MMM YYYY H:m:ss ")
          ) - Date.parse(new Date());
        if (this.remaining_time > 0) {
          setTimeout(this.countdown, this.speed);
        } else {
          this.remaining_time = null;
        }
      }
    },
  },
  computed: {
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

<style>
</style>