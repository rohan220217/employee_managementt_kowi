<template>
  <div>
    <p style="color: #ff5a5a" class="font-weight-medium">Permanent Address</p>

    <!-- Address 1  -->
    <v-text-field solo label="Address 1 " required></v-text-field>

    <!-- Address 2  -->
    <v-text-field solo label="Address 2 " required></v-text-field>

    <!-- Landmark  -->
    <v-text-field solo label="Landmark " required></v-text-field>

    <!-- Pincode  -->
    <v-text-field
      :loading="isLoading"
      solo
      :counter="5"
      label="Pincode"
      v-model="pincode"
      required
    ></v-text-field>

    <v-row>
      <v-col cols="12" sm="6">
        <!-- City  -->
        <v-text-field solo label="City " v-model="city" required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- State  -->
        <v-text-field
          solo
          label="State "
          v-model="state"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Country  -->
    <v-text-field
      solo
      label="Country "
      v-model="country"
      required
    ></v-text-field>

    <p style="color: #ff5a5a" class="font-weight-medium">Current Address</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isLoading: false,
      pincode: "",
      city: "",
      state: "",
      country: "",
    };
  },
  watch: {
    pincode(new_val) {
      if (new_val.length == 6) {
        this.isLoading = true;
        this.fetchDetailUsingPinCode(new_val)
          .then((res) => {
            var data = res[0].PostOffice[0];
            this.city = data.District;
            this.country = data.Country;
            this.state = data.State;
            // District, State, Country
          })
          .finally((_) => {
            this.isLoading = false;
          });
      }
    },
  },
  methods: {
    ...mapActions(["fetchDetailUsingPinCode"]),
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>

<style>
</style>