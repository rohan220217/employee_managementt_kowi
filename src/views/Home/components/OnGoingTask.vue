<template>
  <div v-if="data.length != 0 ">
    <div v-for="(task, key) in data" :key="`on-going-${key}`">
      <p class="pl-4 mb-0"><span class="dot ml-n4"> </span> {{ task.title }}</p>
      <p style="color: #ff5a5a">
        <v-avatar size="25">
          <img src="@/assets/animated_icon/clock.gif" alt="clock" />
        </v-avatar>
        {{ task.timelimit }} hr
      </p>
    </div>
  </div>

  <div class="text-center caption mt-8" v-else>No Ongoing Task </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    ...mapActions(["fetchOnGoingTask"]),
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {
    await this.fetchOnGoingTask(this.userToken).then((res) => {
      this.data = res;
    });
  },
};
</script>


<style scoped>
.dot {
  height: 10px;
  width: 10px;
  background-color: #ff5a5a;
  border-radius: 50%;
  display: inline-block;
}
</style>