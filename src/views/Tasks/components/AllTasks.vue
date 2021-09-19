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
    <Loading class="mt-8" v-if="isLoading" />
    <v-data-table
      v-else
      hide-default-footer
      :headers="headers"
      :items="getAllTasks"
      :search="search"
      @click:row="openTask"
    >
      <template v-slot:[`item.createdat`]="{ item }">
        {{ dayjs(item.createdat).format(" DD MMMM YYYY, HH:mm  A") }}
      </template>
      <template v-slot:[`item.taskstatus`]="{ item }">
        <div v-if="item.taskstatus == 'ongoing'" style="color: #ed8500">
          <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
          <v-avatar size="20">
            <img src="@/assets/animated_icon/ongoing.gif" alt="ongoing" />
          </v-avatar>
          On-Going
        </div>
        <div v-if="item.taskstatus == 'completed'" style="color: #32973c">
          <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
          <v-icon color="#32973C" size="20">mdi-check-circle-outline</v-icon>
          Completed
        </div>
        <div v-if="item.taskstatus == 'pending'" style="color: #e13939">
          <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
          <v-icon color="#E13939" size="22">mdi-alert-octagon-outline</v-icon>
          Pending
        </div>
        <div v-if="item.taskstatus == 'dispute'" style="color: #2634af">
          <!-- <v-icon  color="#ED8500"> mdi-cached </v-icon> On-Going -->
          <v-avatar size="30">
            <img src="@/assets/animated_icon/error.gif" alt="dispute" />
          </v-avatar>
          Dispute
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
import DayNight from "@/components/DayNight";
import Loading from "@/components/Loading";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    DayNight,
    Loading,
  },

  data() {
    return {
      search: "",
      isLoading: false,
      headers: [
        {
          text: "Assigned Task",
          align: "start",
          value: "title",
        },
        { text: "Date/Time", align: "start", value: "createdat", width: "20%" },
        { text: "Status", align: "start", value: "taskstatus", width: "15%" },
      ],
    };
  },

  methods: {
    ...mapActions(["fetchAllTasks"]),
    openTask(item) {
      this.$router.push({ name: "task_id", params: { id: item.id } });
    },
  },
  computed: {
    ...mapGetters(["userToken", "getAllTasks"]),
  },

  async created() {
    this.isLoading = true;
    await this.fetchAllTasks(this.userToken);
    this.isLoading = false;
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