<template>
  <div>
    <v-row class="mx-0">
      <v-col cols="4" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="first"
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="second"
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="px-1">
        <v-text-field
          maxlength="1"
          class="centered-input"
          hide-details
          dense
          solo
          v-model="third"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="here-button" @click="checkIn()">I am Here</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      first: "",
      second: "",
      third: "",
    };
  },
  methods: {
    checkIn() {
      var code = this.first + this.second + this.third;
      console.log(code);
    },
  },
};
</script>

<style  scoped>
.here-button {
  margin-top: 12px;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background-color: #ff5a5a;
  cursor: pointer;
}
.centered-input >>> input {
  text-align: center;
}
</style>