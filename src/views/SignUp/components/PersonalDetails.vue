<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-alert text dense type="warning" class="mb-0">
          you won’t be able to change the below information
        </v-alert></v-col
      >
    </v-row>

    <!-- First and Last Name -->
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="First Name" solo></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="Last Name" solo></v-text-field>
      </v-col>
    </v-row>

    <!-- date picker -->
    <v-menu
      ref="menu2"
      v-model="menu2"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date2"
          label="Birthday date"
          readonly
          solo
          v-bind="attrs"
          v-on="on"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FF5A5A" class="mr-1"> mdi-calendar</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="date2"
        :active-picker.sync="activePicker2"
        :max="
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        "
        min="1950-01-01"
        color="#FF5A5A"
        @change="save2"
      ></v-date-picker>
    </v-menu>

    <!-- Phone Number -->
    <v-text-field
      solo
      :counter="10"
      label="Phone Number"
      required
    ></v-text-field>

    <!-- Email -->
    <v-text-field
      solo
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <!-- Adhar Card -->
    <v-text-field
      solo
      :counter="10"
      label="Aadhar Card"
      required
    ></v-text-field>

    <!-- Employee Id -->
    <v-text-field solo label="Employee Id" required></v-text-field>

    <!-- date Joining -->
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Date of Joining"
          readonly
          solo
          v-bind="attrs"
          v-on="on"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FF5A5A" class="mr-1"> mdi-calendar</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        :active-picker.sync="activePicker"
        :max="
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        "
        min="1950-01-01"
        color="#FF5A5A"
        @change="save"
      ></v-date-picker>
    </v-menu>

    <!-- Blood Group -->
    <v-text-field solo label="Blood Group" required></v-text-field>

    <v-subheader class="pl-0"
      >Colour Selection (this color will represent your id)</v-subheader
    >
    <v-color-picker hide-inputs hide-mode-switch mode="rgba"></v-color-picker>
    <v-btn
      class="float-right mt-4"
      color="#FF5A5A"
      dark
      @click="savePersonalDetail()"
    >
      Next
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
    date2: null,
    menu2: false,

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    menu2(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    save2(date) {
      this.$refs.menu2.save(date);
    },
    savePersonalDetail() {
      this.$emit("next", 2);
    },
  },
};
</script>

<style>
</style>