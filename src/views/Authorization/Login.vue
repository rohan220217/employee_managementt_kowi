<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col sm="4">
        <v-img
          class="mx-auto" style="margin-bottom: 65px "
          max-height="150"
          max-width="250"
          src="@/assets/kowi_logo.svg"
        ></v-img>
        <v-text-field class="mobile_number" label="Mobile Number" outlined dense></v-text-field>
        <v-text-field label="Password" outlined dense></v-text-field>
        <v-btn depressed block color="error" @click="login()"> Login </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["loginUser"]),

    login() {
      this.loginUser('rohan_test');
      this.$router.push({name: 'Home'})
    },
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>
<style>

.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset{
  color: red !important;
}

.theme--light.v-label{
  color: #FFCBCB !important;
}
</style>