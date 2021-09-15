<template>
  <div>
    <v-list-item>
      <v-list-item-avatar size="100">
        <v-img
          src="https://avatars.githubusercontent.com/u/51409281?v=4"
        ></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="font-weight-medium text-h4"
          >Rohan Kumar</v-list-item-title
        >
        <v-list-item-subtitle class="font-weight-medium"
          >Software Developer</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <h1 class="ml-2 mt-4">Profile</h1>
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td>Employee Id</td>
            <td>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Sakshi.Sinha10702@gmail.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>9999999999</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>B/47 vvsbhhkj colony, anisabad, Patna, BIhar 80002</td>
          </tr>
          <tr>
            <td>Date of birth</td>
            <td>01 july 2002</td>
          </tr>
          <tr>
            <td>Date of joining</td>
            <td>10 July 2021</td>
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
        @change="getEvents"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
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
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style>
</style>