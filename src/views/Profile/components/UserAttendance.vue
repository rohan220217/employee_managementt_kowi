<template>
  <div>
    <h3 style="color: #ff5a5a">Attendance Record</h3>
    <v-row class="mt-2">
      <v-col cols="12" sm="3">
        <attendance-card></attendance-card>
      </v-col>
      <v-col cols="12" sm="3">
        <attendance-card></attendance-card>
      </v-col>
      <v-col cols="12" sm="3">
        <attendance-card></attendance-card>
      </v-col>
      <v-col cols="12" sm="3">
        <attendance-card></attendance-card>
      </v-col>
    </v-row>

    <v-simple-table class="mt-2">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Department</th>
            <th class="text-left">Date</th>
            <th class="text-left">Status</th>
            <th class="text-left">Login Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td>Test</td>
            <td>TEst</td>
            <td>TEst</td>
            <td>TEst</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import AttendanceCard from "./AttendanceCard.vue";
export default {
  components: {
    AttendanceCard,
  },
};
</script>

<style>
</style>