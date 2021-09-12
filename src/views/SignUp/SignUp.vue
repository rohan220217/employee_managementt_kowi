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
          <personal-details></personal-details>

          <v-btn class="float-right mt-4" color="#FF5A5A" dark @click="e1 = 2">
            Next
          </v-btn>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-container>
          <Address></Address>

          <v-btn class="float-left mt-4" color="#FF5A5A" dark @click="e1 = 1">
            Prev
          </v-btn>
          <v-btn class="float-right mt-4" color="#FF5A5A" dark @click="e1 = 3">
            Next
          </v-btn>
        </v-container>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-container>
          <bank-detail></bank-detail>
          <v-btn class="float-left mt-4" color="#FF5A5A" dark @click="e1 = 2">
            Prev
          </v-btn>
          <v-btn class="float-right mt-4" color="#FF5A5A" dark @click="e1 = 1">
            Save Details
          </v-btn>
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
  components: {
    BankDetail,
    Address,
    PersonalDetails,
  },
};
</script>

<style>
</style>