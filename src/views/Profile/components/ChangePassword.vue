<template>
  <div class="changepassword-container">
    <h3 style="color: #ff5a5a; margin-bottom: 30px">Change Password</h3>
    <v-text-field
      label="Old Password"
      outlined
      dense
      required
      :rules="[(v) => !!v || 'Old Password is required']"
      v-model="user.oldpassword"
      :type="hidePassword1 ? 'password' : 'text'"
      :append-icon="hidePassword1 ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="hidePassword1 = !hidePassword1"
    ></v-text-field>
    <v-text-field
      label="New Password"
      outlined
      dense
      required
      :rules="[(v) => !!v || 'New Password is required']"
      v-model="user.newpassword"
      :type="hidePassword2 ? 'password' : 'text'"
      :append-icon="hidePassword2 ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="hidePassword2 = !hidePassword2"
    ></v-text-field>

    <v-btn
      depressed
      outlined
      block
      color="error"
      @click="changePasswordButton()"
    >
      Change Password
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      hidePassword1: false,
      hidePassword2: false,
      user: {
        oldpassword: "",
        newpassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["changePassword"]),
    async changePasswordButton() {
      try {
        await this.changePassword({
          token: this.userToken,
          detail: this.user,
        });

        this.$toasted.show("Successfully Changed!", {
          type: "success",
          duration: 3000,
          position: "top-center",
          theme: "toasted-primary",
          icon: "mdi-account",
          iconPack: "mdi",
        });
      } catch (err) {
        this.$toasted.show(err, {
          type: "error",
          duration: 3000,
          position: "top-center",
          theme: "toasted-primary",
          icon: "mdi-account-alert",
          iconPack: "mdi",
        });
      }
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
};
</script>

<style scoped>
.changepassword-container {
  max-width: 500px;
}
</style>