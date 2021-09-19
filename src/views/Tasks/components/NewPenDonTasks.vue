<template>
  <v-card>
    <v-card-title>
      <v-text-field
        class="mt-4 mb-n2"
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        outlined
        dense
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <!-- new task -->
    <v-data-table
      v-if="isTask == 'new'"
      hide-default-footer
      :headers="headers"
      :items="getNewTasks"
      :search="search"
      @click:row="openTask"
    >
      <template v-slot:[`item.createdat`]="{ item }">
        {{ dayjs(item.createdat).format(" DD MMMM YYYY, HH:mm  A") }}
      </template>
      <template v-slot:[`item.timelimit`]="{ item }">
        <v-avatar size="25">
          <img src="@/assets/animated_icon/clock.gif" alt="clock" />
        </v-avatar>
        {{ item.timelimit }}
      </template>
    </v-data-table>

    <!-- Pending table -->
    <v-data-table
      v-else-if="isTask == 'pending'"
      hide-default-footer
      :headers="headers"
      :items="getPendingTasks"
      :search="search"
      @click:row="openTask"
    >
      <template v-slot:[`item.createdat`]="{ item }">
        {{ dayjs(item.createdat).format(" DD MMMM YYYY, HH:mm  A") }}
      </template>
      <template v-slot:[`item.timelimit`]="{ item }">
        <v-avatar size="25">
          <img src="@/assets/animated_icon/clock.gif" alt="clock" />
        </v-avatar>
        {{ item.timelimit }}
      </template>
    </v-data-table>

    <!-- completed table -->
    <v-data-table
      v-else-if="isTask == 'completed'"
      hide-default-footer
      :headers="headers"
      :items="getCompletedTasks"
      :search="search"
      @click:row="openTask"
    >
      <template v-slot:[`item.createdat`]="{ item }">
        {{ dayjs(item.createdat).format(" DD MMMM YYYY, HH:mm  A") }}
      </template>
      <template v-slot:[`item.timelimit`]="{ item }">
        <v-avatar size="25">
          <img src="@/assets/animated_icon/clock.gif" alt="clock" />
        </v-avatar>
        {{ item.timelimit }}
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
import DayNight from "@/components/DayNight";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DayNight,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Assigned Task",
          align: "start",
          value: "title",
        },
        { text: "Date/Time", align: "start", value: "createdat", width: "20%" },
        {
          text: "Time Alloted",
          align: "center",
          value: "timelimit",
          width: "20%",
        },
        {
          text: "Created By",
          align: "center",
          value: "assignedby",
          width: "20%",
        },
      ],
    };
  },
  props: {
    isTask: {
      type: String,
    },
  },
  methods: {
    ...mapActions(["fetchNewPenDonTasks"]),
    openTask(item) {
      this.$router.push({ name: "task_id", params: { id: item.id } });
    },
  },
  computed: {
    ...mapGetters([
      "userToken",
      "getNewTasks",
      "getPendingTasks",
      "getCompletedTasks",
    ]),
  },

  async created() {
    this.$vloading.show();
    if (this.isTask == "new")
      await this.fetchNewPenDonTasks({ token: this.userToken, query: "new" });
    else if (this.isTask == "pending")
      await this.fetchNewPenDonTasks({
        token: this.userToken,
        query: "pending",
      });
    else if (this.isTask == "completed")
      await this.fetchNewPenDonTasks({
        token: this.userToken,
        query: "completed",
      });

    this.$vloading.hide();
  },
};
</script>

<style>
th {
  color: #ff5a5a !important;
  font-size: 20px !important;
  font-weight: 500;
}
</style>