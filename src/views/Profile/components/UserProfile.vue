<template>
  <div v-if="getUserData">
    <v-list-item class="pl-0">
      <v-list-item-avatar size="100">
        <v-img
          :src="'https://dev.kowi.in' + getUserData.pic"
          :style="`border: 2px solid ${getUserData.colorhex !=null ? getUserData.colorhex : '#ff5a5a' }`"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="font-weight-medium text-h4">{{
          getUserData.name
        }}</v-list-item-title>
        <v-list-item-subtitle class="font-weight-medium">{{
          getUserData.role
        }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <!-- <h1 class="ml-2 mt-4">Profile</h1> -->
    
    <h3 style="color: #ff5a5a" class="mt-4 mb-2">Profile</h3>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td>Employee Id</td>
            <td>{{ getUserData.emp_id }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ getUserData.email }}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{{ getUserData.number }}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{{ getUserData.address }}</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>{{ getUserData.dob }}</td>
          </tr>
          <tr>
            <td>Date of joining</td>
            <td>{{ getUserData.doj }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-sheet height="600" class="mt-4">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
      ></v-calendar>
      <!-- @change="getEvents" -->
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  methods: {
    ...mapActions(["fetchUserData"]),
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  computed: {
    ...mapGetters(["userToken", "getUserData"]),
  },
  async created() {
    await this.fetchUserData(this.userToken);
  },
};
</script>
<style>
</style>