<template>
  <v-container class="fill-height" fluid v-if="!$store.getters.userToken">
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
            hint="use @kowi.in to access"
            persistent-hint
            outlined
            dense
            :rules="emailRules"
            label="E-mail"
            v-model="user.email"
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
  <v-container v-else class="fill-height">
    <v-row align="center" justify="center">
      <v-col sm="6" class="text-center">
        <v-img height="250" contain src="@/assets/svg/welcome.svg"></v-img>
        <h1 style="color: #ff5a5a">Welcome to KOWI</h1>
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
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginUser"]),

    login() {
      if (this.$refs.form.validate()) {
        this.$vloading.show();
        this.loginUser(this.user)
          .then((res) => {
            if (res.first_login) this.$router.push({ name: "SignUp" });
            else this.$router.push({ name: "Home" });
            this.$toasted.show("Logged in Successfully", {
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
          })
          .finally(() => {
            this.$vloading.hide();
          });
      }
    },
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>
<style>
</style>