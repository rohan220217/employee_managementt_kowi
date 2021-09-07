<template>
  <div class="task-main-box">
    <v-tabs color="#FF5A5A" left>
      <v-tab>All</v-tab>
      <v-tab>New</v-tab>
      <v-tab>Pending</v-tab>
      <v-tab>Done</v-tab>
      <v-spacer></v-spacer>
      <div
        class="total_task"
        :style="[$vuetify.theme.dark ? { color: 'white' } : { color: 'black' }]"
      >
        Total Tasks: 255
      </div>
      <v-avatar size="36" class="mt-2">
        <img
          src="https://avatars.githubusercontent.com/u/51409281?v=4"
          alt="user"
        />
      </v-avatar>

      <v-tab-item v-for="n in 4" :key="n">
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
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>

        <!-- <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container> -->
      </v-tab-item>
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
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
          value: "name",
        },
        { text: "Date/Time", align: "end", value: "calories" },
        { text: "Status", align: "center", value: "fat" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
        },
      ],
    };
  },

  methods: {
    ...mapActions(["fetchAllTasks"]),
  },
  computed: {
    ...mapGetters([]),
  },

  async created() {
    this.$vloading.show();
    // await this.fetchAllTasks();
    this.$vloading.hide();
  },
};
</script>

<style>
.task-main-box {
  padding: 0 30px;
}
.total_task {
  margin-top: 15px;
  margin-right: 20px;
}
th {
  color: red !important;
  font-size: 20px !important;
  font-weight: 500;
}
</style>