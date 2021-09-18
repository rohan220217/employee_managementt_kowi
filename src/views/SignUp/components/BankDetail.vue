<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <!-- Branch Name  -->
    <v-text-field
      solo
      label="Branch Name "
      v-model="userBankDetail.branchname"
      required
      :rules="[(v) => !!v || 'Branch Name is required']"
    ></v-text-field>
    <!-- IFSC Code  -->
    <v-text-field
      solo
      label="IFSC Code "
      v-model="userBankDetail.ifsc"
      required
      :rules="[(v) => !!v || 'IFSC Code is required']"
    ></v-text-field>
    <!-- Account Number  -->
    <v-text-field
      solo
      label="Account Number "
      v-model="userBankDetail.accountno"
      type="number"
      required
      :rules="[(v) => !!v || 'Account Number is required']"
    ></v-text-field>
    <!-- Account Holder Name  -->
    <v-text-field
      solo
      label="Account Holder Name "
      v-model="userBankDetail.accountname"
      required
      :rules="[(v) => !!v || 'Holder Name is required']"
    ></v-text-field>
    <v-btn class="float-left mt-4" color="#FF5A5A" dark @click="prevTab()">
      Prev
    </v-btn>
    <v-btn
      class="float-right mt-4"
      color="#FF5A5A"
      dark
      @click="saveDetails()"
      :loading="isLoading"
    >
      Save Details
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      valid: true,
      isLoading: false,
      userBankDetail: {
        accountno: "",
        branchname: "",
        accountname: "",
        ifsc: "",
      },
    };
  },

  methods: {
    ...mapActions(["sendUserBankDetail"]),
    saveDetails() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        this.sendUserBankDetail({
          token: this.userToken,
          detail: this.userBankDetail,
        })
          .then((_) => {
            this.$router.push({ name: "Home" });
            this.$toasted.show("User Bank Detail saved", {
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
            this.isLoading = false;
          });
      }
    },
    prevTab() {
      this.$emit("prev", 2);
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
};
</script>

<style>
</style>