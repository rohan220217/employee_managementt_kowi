<template>
  <v-form ref="personalForm" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" sm="6">
        <v-alert text dense type="warning" class="mb-0">
          you won’t be able to change the below information 
        </v-alert></v-col
      >{{ personalDetail }}
    </v-row>

    <!-- First and Last Name -->
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="First Name"
          solo
          v-model="personalDetail.fname"
          required
          :rules="[(v) => !!v || 'First Name is required']"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Last Name"
          solo
          v-model="personalDetail.lname"
          required
          :rules="[(v) => !!v || 'Last Name is required']"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- date picker -->
    <v-menu
      ref="dobMenu"
      v-model="isDobMenu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="personalDetail.dob"
          label="Birthday date"
          readonly
          solo
          v-bind="attrs"
          v-on="on"
          required
          :rules="[(v) => !!v || 'DOB is required']"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FF5A5A" class="mr-1"> mdi-calendar</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="personalDetail.dob"
        :max="
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        "
        min="1950-01-01"
        color="#FF5A5A"
        @change="saveDobMenu"
      ></v-date-picker>
    </v-menu>

    <!-- Phone Number -->
    <v-text-field
      v-model="personalDetail.mobno"
      solo
      :counter="10"
      label="Phone Number"
      required
      :rules="[(v) => !!v || 'Phone Number is required']"
    ></v-text-field>

    <!-- Email -->
    <v-text-field disabled solo label="E-mail" required></v-text-field>

    <!-- Adhar Card -->
    <v-text-field
      v-model="personalDetail.aadhar"
      solo
      :counter="10"
      label="Aadhar Card"
      required
      :rules="[(v) => !!v || 'Aadhar Card is required']"
    ></v-text-field>

    <!-- Employee Id -->
    <v-text-field disabled solo label="Employee Id" required></v-text-field>

    <!-- date Joining -->

    <v-text-field disabled label="Date of Joining" readonly solo>
      <template v-slot:prepend-inner>
        <v-icon color="#FF5A5A" class="mr-1"> mdi-calendar</v-icon>
      </template>
    </v-text-field>

    <!-- Blood Group -->
    <v-text-field
      v-model="personalDetail.bloodgroup"
      solo
      label="Blood Group"
      required
      :rules="[(v) => !!v || 'Blood Group is required']"
    ></v-text-field>

    <v-subheader class="pl-0"
      >Colour Selection (this color will represent your id)</v-subheader
    >
    <v-color-picker
      v-model="personalDetail.colorhex"
      hide-inputs
      hide-mode-switch
      mode="rgba"
      required
      :rules="[(v) => !!v || 'Color is required']"
    ></v-color-picker>
    <v-btn
      class="float-right mt-4"
      color="#FF5A5A"
      dark
      @click="savePersonalDetail()"
    >
      Next
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    isDobMenu: false,
    valid: true,
    isLoading: false,
    personalDetail: {
      fname: "",
      lname: "",
      mobno: "",
      dob: "",
      aadhar: "",
      bloodgroup: "",
      colorhex: "#FF5A5A",
    },
  }),

  methods: {
    saveDobMenu(date) {
      this.$refs.dobMenu.save(date);
    },
    savePersonalDetail() {
      this.isLoading = true;
      if (this.$refs.personalForm.validate()) {
        this.isLoading = false;
      }
      this.$emit("next", 2);
      this.$emit("nameMobno", this.personalDetail);
    },
  },
};
</script>

<style>
</style>