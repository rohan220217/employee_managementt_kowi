<template>
  <v-container fluid class="mt-4">
    {{ task }}
    <v-form ref="newTask" v-model="newTask" lazy-validation>
      <v-subheader>Task Name</v-subheader>
      <v-text-field
        outlined
        dense
        flat
        solo
        class="mb-n2"
        label="Add a title"
        required
        :rules="[(v) => !!v || 'Title is required']"
        v-model="task.title"
      ></v-text-field>

      <v-subheader>Task Description</v-subheader>
      <v-textarea
        solo
        label="Add a description"
        outlined
        flat
        class="mb-n4"
        required
        :rules="[(v) => !!v || 'Description is required']"
        v-model="task.description"
      ></v-textarea>

      <v-row>
        <v-col cols="12" sm="2">
          <v-subheader>Time Limit</v-subheader>
          <v-text-field
            maxlength="2"
            outlined
            dense
            flat
            solo
            required
            :rules="[(v) => !!v || 'Time Limit is required']"
            class="mb-n2"
            label="00:00:00"
            suffix="hr"
            v-model="custom_time_limit"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <all-employee
            :label="'Assign'"
            v-model="task.assignedto"
          ></all-employee>
        </v-col>
      </v-row>

      <v-subheader>Suggestions</v-subheader>
      <v-text-field
        outlined
        dense
        flat
        solo
        hide-details
        class="mb-4"
        label="Add a suggestion/referral link"
        v-model="task.sugestions"
      >
        <template v-slot:append>
          <v-icon color="#FF5A5A"> mdi-link-variant</v-icon>
        </template>
      </v-text-field>

      <v-subheader class="mb-n5">Previous Developer</v-subheader>
      <all-employee
        :label="'If none leave it blank'"
        v-model="task.previousdev"
        class="mb-4 mt-0"
      ></all-employee>
      <v-subheader>Comment</v-subheader>
      <v-text-field
        outlined
        dense
        flat
        solo
        hide-details
        class="mb-4"
        label="Add a comment"
        v-model="task.comment"
      >
      </v-text-field>

      <v-subheader>Upload Images</v-subheader>
      <v-file-input
        accept="image/*"
        small-chips
        multiple
        label="File input"
        v-model="images"
      ></v-file-input>
      <v-btn
        color="#ff5a5a"
        dark
        class="rounded-lg mt-8"
        min-width="200px"
        @click="review"
        >Review</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import KowiButton from "@/components/KowiButton";
import AllEmployee from "@/components/AllEmployee";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    KowiButton,
    AllEmployee,
  },
  data() {
    return {
      newTask: true,
      images: null,
      task: {
        title: "",
        description: "",
        sugestions: "",
        comment: "",
        previousdev: [],
        assignedto: [],
        timelimit: "",
      },
      custom_time_limit: "",
      task_id: null,
    };
  },
  watch: {
    custom_time_limit: function (new_val) {
      this.task.timelimit = new_val + ":00:00";
    },
  },
  methods: {
    ...mapActions(["sendNewTask", "newTaskImageUpload"]),
    async review() {
      if (this.$refs.newTask.validate()) {
        this.$vloading.show();
        await this.sendNewTask({ token: this.userToken, data: this.task }).then(
          (res) => {
            this.task_id = res.data.task_id;
              console.log(res);
          }
        );
        if (this.images != null)
          for (var image_index in this.images) {
            var _data = {
              image: this.images[image_index],
              id: this.task_id,
              caption: "kowi",
            };
            await this.newTaskImageUpload({
              token: this.userToken,
              data: _data,
            }).then((res) => {
              console.log(res);
            });
          }
        this.$vloading.hide();
        this.$router.push({ name: "Tasks" });
      }
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
};
</script>

<style>
</style>