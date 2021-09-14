<template>
  <div>
    <div class="date-time">{{ dayjs().format("dddd, DD, MMM YYYY") }}</div>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="greet">
          {{ wish }}
        </div>
        <div class="user-name">Rohan</div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img contain src="@/assets/svg/cloud.svg" height="75" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wish: "",
    };
  },
  methods: {
    getWish() {
      var day = new Date();
      var hr = day.getHours();
      if (hr >= 0 && hr < 12) {
        this.wish = "Good Morning!";
      } else if (hr == 12) {
        this.wish = "Good Noon!";
      } else if (hr >= 12 && hr <= 17) {
        this.wish = "Good Afternoon!";
      } else {
        this.wish = "Good Evening!";
      }
    },
  },

  created() {
    this.getWish();
  },
};
</script>

<style scoped>
.date-time {
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 5px;
}
.greet {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 25px;
}
.user-name {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>