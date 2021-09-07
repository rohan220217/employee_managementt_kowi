<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col sm="4">
        <v-img
          class="mx-auto"
          style="margin-bottom: 65px"
          max-height="150"
          max-width="250"
          src="@/assets/kowi_logo.svg"
        ></v-img>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            class="mobile_number"
            label="Mobile Number"
            outlined
            dense
             required
              :counter="10"
            :rules="mobileRules"
            v-model="user.mobile_number"
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            dense
            required
            :rules="[(v) => !!v || 'Password is required']"
            v-model="user.password"
            :type="hidePassword ? 'password' : 'text'"
            :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="hidePassword = !hidePassword"
          ></v-text-field>
          <v-btn depressed block color="error" @click="login()"> Login </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      valid: true,

      hidePassword: true,
      mobileRules: [
        (v) => !!v || "Mobile Number is required",
        (v) => v.length == 10 || "Mobile number must be of 10 digit",
      ],
      user: {
        mobile_number: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginUser"]),

    login() {
      // this.$router.push({name: 'Home'})

      this.$vloading.show();
      this.loginUser(this.user)
        .then((res) => {
          this.$vloading.hide();
          this.$toasted.show("User created Successfully", {
            type: "success",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account",
            iconPack: "mdi",
          });
        })
        .catch((err) => {
          this.$vloading.hide();
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
    ...mapGetters([]),
  },
};
</script>
<style>
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
  > .v-input__control
  > .v-input__slot
  fieldset {
  color: red !important;
}

.theme--light.v-label {
  color: #ffcbcb !important;
}
</style>