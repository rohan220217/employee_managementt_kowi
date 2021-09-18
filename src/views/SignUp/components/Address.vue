<template>
  <v-form ref="addForm" v-model="addValid" lazy-validation>
    <p style="color: #ff5a5a" class="font-weight-medium mb-0">Address</p>
    {{ userAddress }}
    <v-radio-group v-model="userAddress.address_type" row required>
      <v-radio label="Home" color="#ff5a5a" value="Home"></v-radio>
      <v-radio label="Work" color="#ff5a5a" value="Work"></v-radio>
      <v-radio label="Permanent" color="#ff5a5a" value="Permanent"></v-radio>
      <v-radio label="Current" color="#ff5a5a" value="Current"></v-radio>
    </v-radio-group>

    <!-- Address 1  -->
    <v-text-field
      v-model="userAddress.main_address"
      solo
      label="Main Address "
      required
      :rules="[(v) => !!v || 'Main Address is required']"
    ></v-text-field>

    <!-- Pincode  -->
    <v-text-field
      :loading="isLoading"
      solo
      :counter="6"
      label="Pincode"
      v-model="userAddress.pincode"
      required
      :rules="[(v) => !!v || 'Pincode is required']"
    ></v-text-field>

    <v-row>
      <v-col cols="12" sm="6">
        <!-- City  -->
        <v-text-field
          solo
          label="City "
          v-model="userAddress.city"
          required
          :rules="[(v) => !!v || 'City is required']"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- State  -->
        <v-text-field
          solo
          label="State "
          v-model="userAddress.state"
          required
          :rules="[(v) => !!v || 'State is required']"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Country  -->
    <v-text-field
      solo
      label="Country "
      v-model="userAddress.country"
      required
      :rules="[(v) => !!v || 'Country is required']"
    ></v-text-field>

    <!-- Landmark  -->
    <v-text-field
      v-model="userAddress.landmark"
      solo
      label="Landmark "
      required
      :rules="[(v) => !!v || 'Landmark is required']"
    ></v-text-field>
    <!-- locality  -->
    <v-text-field
      v-model="userAddress.locality"
      solo
      label="Locality "
      required
      :rules="[(v) => !!v || 'Locality is required']"
    ></v-text-field>

    <!-- Phone Number -->
    <v-text-field
      v-model="userAddress.alternatemobno"
      solo
      :counter="10"
      label="Alternate Number"
      required
      :rules="[(v) => !!v || 'Alternate Number is required']"
    ></v-text-field>

    <!-- <p style="color: #ff5a5a" class="font-weight-medium">Current Address</p> -->

    <v-btn class="float-left mt-4" color="#FF5A5A" dark @click="prevTab()">
      Prev
    </v-btn>
    <v-btn
      class="float-right mt-4"
      color="#FF5A5A"
      dark
      @click="saveAddress()"
      :loading="isButtonLoading"
    >
      Next
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      isButtonLoading: false,
      addValid: true,
      userAddress: {
        main_address: "",
        address_type: "Home",
        city: "",
        state: "",
        landmark: "",
        mobno: "",
        name: "",
        pincode: "",
        locality: "",
        alternatemobno: "",
      },
    };
  },
  watch: {
    "userAddress.pincode": function (new_val) {
      if (new_val.length == 6) {
        this.isLoading = true;
        this.fetchDetailUsingPinCode(new_val)
          .then((res) => {
            var data = res[0].PostOffice[0];
            this.userAddress.city = data.District;
            this.userAddress.country = data.Country;
            this.userAddress.state = data.State;
            // District, State, Country
          })
          .finally((_) => {
            this.isLoading = false;
          });
      }
    },
  },
  methods: {
    ...mapActions(["fetchDetailUsingPinCode", "sendUserAddressDetail"]),
    saveAddress() {
      this.userAddress.name = this.name;
      this.userAddress.mobno = this.mobno;

      if (this.$refs.addForm.validate()) {
        this.isButtonLoading = true;
        this.sendUserAddressDetail({
          token: this.userToken,
          detail: this.userAddress,
        })
          .then((_) => {
            this.$emit("next", 3);
            this.$toasted.show("User Address saved", {
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
            this.isButtonLoading = false;
          });
      }
    },
    prevTab() {
      this.$emit("prev", 1);
    },
  },
  computed: {
    ...mapGetters([]),
  },
  props: ["name", "mobno"],
};
</script>

<style>
</style>