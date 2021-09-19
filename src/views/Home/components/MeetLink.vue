<template>
  <div class="home-box">
    <v-row>
      <v-col>
        <div class="join-meet">Join Meet</div>
      </v-col>
      <v-col>
        <div class="join-button" @click="joinMeet()">Join</div>
      </v-col>
    </v-row>
    <div
      class="meet-link-box"
      :style="[
        $vuetify.theme.dark
          ? { backgroundColor: '#363636' }
          : { backgroundColor: '#f0f0f0' },
      ]"
    >
      <div class="meet-link">{{ meetLink }}</div>
      <div class="meet-button">
        <v-btn
          :loading="isLoading"
          icon
          color="#FF5A5A"
          v-clipboard:copy="meetLink"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          <v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      meetLink: "https://meet.google.com/",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["fetchMeetLink"]),

    joinMeet() {
      window.open(this.meetLink, "_blank");
    },

    onCopy: function (e) {
      this.$toasted.show("You just copied: " + e.text, {
        type: "success",
        duration: 3000,
        position: "top-center",
        theme: "toasted-primary",
        icon: "mdi-account",
        iconPack: "mdi",
      });
    },
    onError: function (e) {
      this.$toasted.show("Failed to copy texts", {
        type: "error",
        duration: 3000,
        position: "top-center",
        theme: "toasted-primary",
        icon: "mdi-account-alert",
        iconPack: "mdi",
      });
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {
    this.isLoading = true;
    await this.fetchMeetLink(this.userToken).then((res) => {
      // set meet link
      this.meetLink = res.link;
    });
    this.isLoading = false;
  },
};
</script>

<style scoped>
.join-meet {
  font-size: 1rem;
  font-weight: 700;
}
.join-button {
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 150px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background-color: #ff5a5a;
  float: right;
  cursor: pointer;
}
.meet-link-box {
  margin-top: 15px;
  padding: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 20px;
  height: 54px;
  /* background-color: #f0f0f0; */
  /* background-color: #363636; */

  position: relative;
}
.meet-link {
  font-weight: 500;
}
.meet-button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>