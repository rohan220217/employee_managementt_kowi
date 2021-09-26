<template>
<div>
  
    <!-- Notification app bar -->
    <tool-bar :isDate="true" /> <div class="my-4 px-8">
    <!-- {{ task }} {{custom_time_limit}} -->
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
      <!-- <v-textarea
        solo
        label="Add a description"
        outlined
        flat
        class="mb-n4"
        required
        :rules="[(v) => !!v || 'Description is required']"
       
      ></v-textarea> -->
      <quill-editor
        v-model="task.description"
        :config="editorOption"
        class="mb-4"
      >
      </quill-editor>

      <v-row>
        <v-col cols="12" sm="2">
          <v-subheader class="mb-n2">Time Limit</v-subheader>
          <v-datetime-picker
            label="Select Datetime"
            v-model="custom_time_limit"
          >
            <template slot="dateIcon">
              <v-icon>mdi-calendar</v-icon>
            </template>
            <template slot="timeIcon">
              <v-icon>mdi-clock</v-icon>
            </template>
          </v-datetime-picker>
          <!-- <v-text-field
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
          ></v-text-field> -->
        </v-col>
        <v-col cols="12" sm="4">
          <all-employee
            :label="'Assign'"
            v-model="task.assignedto"
          ></all-employee>
        </v-col>
        <v-col cols="12" sm="4">
          <kowi-button
          class="mt-6"
            :text="'Add Collaborators'"
            :onClicked="addNewCollaborator"
            :isActive="false"
          ></kowi-button>
        </v-col>
      </v-row>

      <!-- {{ collaborators }} -->
      <v-row
        v-for="(collab_row, collab_row_i) in collaborators.collabids"
        :key="`NEW_COLLAB_${collab_row_i}`"
        class=""
      >
        <v-col cols="12" sm="3">
          <collab-reviewers
            v-model="collaborators.collabids[collab_row_i]"
            :label="'Add Collaborators'"
          ></collab-reviewers>
        </v-col>
        <v-col cols="12" sm="9">
          <v-text-field
          v-model="collaborators.descs[collab_row_i]"
            dense
            label="Add a description"
            outlined
            flat
            hide-details
            class="mb-3"
          ></v-text-field>
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
  </div>
</div>
 
</template>

<script>
import KowiButton from "@/components/KowiButton";
import AllEmployee from "@/components/AllEmployee";
import CollabReviewers from "./components/CollabReviewers";
import ToolBar from "@/components/ToolBar.vue";
import { quillEditor } from "vue-quill-editor";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    KowiButton,
    AllEmployee,
    quillEditor,
    CollabReviewers,
    ToolBar
  },
  data() {
    return {
      collaborators: {
        collabids: [],
        descs: [],
      },
      newTask: true,
      images: null,
      task: {
        title: "",
        description: "",
        sugestions: "",
        comment: "",
        previousdev: null,
        assignedto: null,
        endtime: "",
      },
      custom_time_limit: "",
      task_id: null,
      editorOption: {},
    };
  },
  watch: {
    custom_time_limit: function (new_val) {
      console.log(this.dayjs(new_val).format("YYYY-MM-DDTHH:mm:ss"));
      this.task.endtime = this.dayjs(new_val).format("YYYY-MM-DDTHH:mm:ss");
      // 2021-09-23 18:45:44.421025
    },
  },
  methods: {
    ...mapActions(["sendNewTask", "newTaskImageUpload"]),
    async review() {
      if (this.$refs.newTask.validate()) {
        this.$vloading.show();
        // collaborators and description
        this.task.collabids= this.collaborators.collabids;
        this.task.descs= this.collaborators.descs;

        // add new task
        await this.sendNewTask({ token: this.userToken, data: this.task }).then(
          (res) => {
            this.task_id = res.data.task_id;
            console.log(res);
          }
        );
        // check image then run the image api
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
    addNewCollaborator() {
      this.collaborators.collabids.push(null);
      this.collaborators.descs.push(null);
      // this.collaborators.push({
      //   collaborator: null,
      //   collaborator_description: "",
      // });
    },
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
};
</script>

<style>
</style>