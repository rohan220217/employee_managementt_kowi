<template>
  <v-list-item>
    <v-list-item-avatar size="55">
      <img :src="'https://dev.kowi.in' + data.createdby.pic" alt="User" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold">
        <span :style="`color: ${data.hexcode}`">{{ data.createdby.name }}</span>
        {{ data.task ? "created a new task:" : ".................." }} “{{
          data.title
        }}”
      </v-list-item-title>

      <v-list-item-subtitle>
        <v-btn outlined color="#ff5a5a" small @click="openReview()"
          >Review</v-btn
        >
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <p class="caption">
        {{ dayjs(data.time).format("DD-MM-YY, h:mm a") }}
        <v-btn
          x-small
          icon
          :color="isStarred ? '#ED8500' : 'gray'"
          @click="toggleStar(data.id)"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </p>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isStarred: false,
    };
  },
  props: ["data"],

  methods: {
    ...mapActions(["starNotification"]),
    openReview() { 
      this.$router.push({ name: "Review"});

    },
    toggleStar(id) {
      // var starValue = 0;
      this.isStarred = !this.isStarred;
      // if (this.isStarred) starValue = 1;
      // else starValue = 0;
      this.starNotification({ token: this.userToken, value: id })
        .then((res) => {
          this.$toasted.show(res.response, {
            type: "success",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account",
            iconPack: "mdi",
          });
        })
        .catch((err) => {
          this.$toasted.show(err, {
            type: "error",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account-alert",
            iconPack: "mdi",
          });
        });
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  created() {
    if (this.data.starred) this.isStarred = true;
  },
};
</script>

<style>
</style>