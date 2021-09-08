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
          <v-avatar size="25">
            <img src="@/assets/animated_icon/ongoing.gif" alt="John" />
          </v-avatar>
          On-Going
        </div>
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
        { text: "Status", align: "center", value: "taskstatus" },
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
    this.$vloading.show();
    await this.fetchAllTasks(this.userToken);
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