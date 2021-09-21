<template>
  <div>
    <v-row class="mx-0">
      <v-col cols="3" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="first"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="second"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="third"
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="fourth"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="here-button" @click="checkIn()">I am Here</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      first: "",
      second: "",
      third: "",
      fourth: "",
    };
  },
  methods: {
    ...mapActions(["postUserOtp"]),
    checkIn() {
      var code = this.first + this.second + this.third + this.fourth;
      console.log(code);
      this.postUserOtp({ token: this.userToken, query: code })
        .then((res) =>
          this.$toasted.show("Attendance marked", {
            type: "success",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account-alert",
            iconPack: "mdi",
          })
        )
        .catch((err) =>
          this.$toasted.show('Please try again...', {
            type: "error",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account-alert",
            iconPack: "mdi",
          })
        );
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
};
</script>

<style  scoped>
.here-button {
  margin-top: 12px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background-color: #ff5a5a;
  cursor: pointer;
}
.centered-input >>> input {
  text-align: center;
}
</style>