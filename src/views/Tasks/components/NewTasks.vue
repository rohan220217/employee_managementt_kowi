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
    <v-data-table
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
        <v-icon class="mr-1" color="#ED8500"> mdi-av-timer </v-icon>
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
        { text: "Date/Time", align: "end", value: "createdat" },
        { text: "Time Alloted", align: "end", value: "timelimit" },
        { text: "Created By", align: "center", value: "assignedby" },
      ],
    };
  },

  methods: {
    ...mapActions(["fetchNewTasks"]),
    openTask(item){
      this.$router.push({name: 'task_id',  params: { id: item.id } })
    }
  },
  computed: {
    ...mapGetters(["userToken", "getNewTasks"]),
  },

  async created() {
    this.$vloading.show();
    await this.fetchNewTasks({ token: this.userToken, query: "new" });
    this.$vloading.hide();
  },
};
</script>

<style>
th {
  color: red !important;
  font-size: 20px !important;
  font-weight: 500;
}
</style>