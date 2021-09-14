<template>
  <v-stepper v-model="e1" class="elevation-0" alt-labels>
    <v-stepper-header elevation="1" class="elevation-1 pa-0">
      <v-stepper-step color="#FF5A5A" :complete="e1 > 1" step="1">
        Personal Details
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#FF5A5A" :complete="e1 > 2" step="2">
        Address
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step color="#FF5A5A" step="3"> Bank Details </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1" class="py-2">
        <v-container>
          <personal-details @next="nextTab"></personal-details>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container>
          <Address @next="nextTab" @prev="prevTab"></Address>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container>
          <bank-detail @prev="prevTab"></bank-detail>
        </v-container>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import PersonalDetails from "./components/PersonalDetails.vue";
import Address from "./components/Address.vue";
import BankDetail from "./components/BankDetail.vue";
export default {
  data() {
    return {
      e1: 1,
    };
  },
  methods: {
    nextTab(value) {
      this.e1 = value;
    },
    prevTab(value) {
      this.e1 = value;
    },
  },
  components: {
    BankDetail,
    Address,
    PersonalDetails,
  },
};
</script>

<style>
</style>