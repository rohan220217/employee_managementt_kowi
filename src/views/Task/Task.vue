<template>
  <div>
    <!-- Home app bar -->
    <tool-bar :isBack="true" :isTaskCount="true" />

    <!-- Main content -->
    <div class="task-container">
      <!-- {{ getTask }} -->
      <v-row>
        <v-col>
          <h2>{{ getTask.title }}</h2>
        </v-col>
        <v-col>
          <start-button
            :endtime="getTask.endtim"
            :taskstatus="getTask.taskstatus"
            :taskid="getTask.id"
            :starttime="getTask.starttim"
            :disputetime="getTask.dispstart"
          ></start-button>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <h3>Description</h3>
        </v-col>
        <v-col>
          <p class="red--text text-right font-weight-medium">
            <!-- 13 Aug 2021, 3:44pm -->
            {{ dayjs(getTask.endtim).format("DD MMM YYYY | hh:mm:ss A ") }}
          </p>
        </v-col>
      </v-row>

      <!-- quill editor -->
      <div class="ql-snow">
        <div class="ql-editor">
          <div v-html="getTask.description"></div>
        </div>
      </div>
      <!-- {{ getTask.description }} -->

      <!-- carousel -->
      <kowi-carousel :images="getTask.images"></kowi-carousel>

      <div class="suggestion-box">
        <p>
          <span class="suggetion-box-heading">Status:- </span>
          {{ getTask.taskstatus }}
        </p>
        <p v-if="getTask.assignedby">
          <span class="suggetion-box-heading">Assigned by :- </span>
          <span :style="`color: ${getTask.assignedby.colorhex}`">
            {{ getTask.assignedby.name }}
          </span>
        </p>
        <p>
          <span class="suggetion-box-heading"
            >Previous Developer of Screen :-
          </span>
          <span v-for="(prevDev, _key) in getTask.previousdev" :key="_key">
            <span :style="`color: ${prevDev.colorhex}`">
              {{ prevDev.name }}
            </span>
          </span>
        </p>
        <p>
          <span class="suggetion-box-heading">Suggestions :- </span>
          {{ getTask.sugestions }}
        </p>
        <p>
          <span class="suggetion-box-heading">Revisions </span> #{{
            getTask.revision
          }}
        </p>
        <p>
          <span class="suggetion-box-heading">Comments of Reviewer :- </span>
          {{ getTask.comment }}
        </p>
      </div>

      <!-- Chat content -->
      <div
        class="suggestion-box"
        v-if="getAllThreads && getAllThreads.length > 0"
      >
        <div v-for="(message, key) in getAllThreads" :key="`message-${key}`">
          <!-- {{message}} -->
          <user-message
            :userData="{
              name: message.username,
              url: 'https://dev.kowi.in' + message.pic,
              message: message.comment,
              time: message.time,
              hexcode: message.hexcode,
              tagged: message.tagged,
            }"
          ></user-message>
          <div
            v-for="(sub_message, key) in message.sub"
            :key="`sub-message-${key}`"
          >
          <!-- {{sub_message}} -->
            <my-message
              :myData="{
                name: sub_message.username,
                message: sub_message.comment,
                time: sub_message.time,
                hexcode: sub_message.hexcode,
                tagged: sub_message.tagged,
              }"
            ></my-message>
          </div>
          <add-comment
            v-if="isGetPending"
            :task_id="getTask.id"
            :comment_id="message.id"
            :cmntid="getTask.cmntids"
          ></add-comment>
        </div>
      </div>
      <add-comment
        v-if="isGetPending"
        :task_id="getTask.id"
        class="mt-6"
        :cmntid="getTask.cmntids"
        :isComment="true"
      ></add-comment>

      <!-- complete and dispute button -->
      <div v-if="!isGetPending && !isGetDispute">
        <!-- Button -->
        <div class="mt-8 mb-4" v-if="isGetOngoing">
          <kowi-button
            :text="'Completed My Task'"
            :isActive="isCompleted"
            :onClicked="switchComplete"
          ></kowi-button>
          <kowi-button
            class="ml-4"
            :text="'Dispute'"
            :isActive="isDispute"
            :onClicked="switchDispute"
          ></kowi-button>
        </div>

        <!-- Text area -->
        <v-textarea
          v-if="isDispute"
          class="mt-4"
          label="Add a Note"
          auto-grow
          outlined
          dense
          v-model="dispute.note"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#FF5959"> mdi-plus </v-icon>
          </template></v-textarea
        >
        <kowi-button
          v-if="isDispute"
          :onClicked="closeTask"
          :text="'Submit'"
          :isActive="false"
        ></kowi-button>
        <!-- Iscomplete task  -->
        <div v-if="isCompleted">
          <!-- Checkbox -->
          <v-row>
            <v-col cols="12" sm="3">
              <v-checkbox
                class="black--text"
                color="red"
                v-model="taskDetail.pullrequest"
                hide-details
              >
                <template v-slot:label>
                  <p
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    class="mb-0"
                  >
                    Pull request added to github
                  </p>
                </template>
              </v-checkbox>
            </v-col>

            <v-col cols="12" sm="3">
              <v-checkbox
                color="red"
                v-model="taskDetail.mergerequest"
                hide-details
              >
                <template v-slot:label>
                  <p
                    :class="$vuetify.theme.dark ? 'white--text' : 'black--text'"
                    class="mb-0"
                  >
                    Request Merge
                  </p>
                </template></v-checkbox
              >
            </v-col>
          </v-row>

          <v-text-field
            class="mt-8"
            label="Add a Branch Name"
            outlined
            dense
            hide-details
            v-model="taskDetail.branchname"
          >
            <template v-slot:prepend-inner>
              <v-icon color="#FF5959"> mdi-plus </v-icon>
            </template>
          </v-text-field>

          <!-- Reviewers -->
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-if="isGetCompleted"
                class="mt-8"
                label="Reviewers"
                outlined
                dense
                hide-details
                :value="getTask.reviewer.name"
              >
                <template v-slot:prepend-inner>
                  <v-icon color="#FF5959"> mdi-plus </v-icon>
                </template>
              </v-text-field>

              <all-reviewers
                v-model="taskDetail.reviews"
                v-else
              ></all-reviewers>
            </v-col>
          </v-row>
          <v-text-field
            class="mt-8"
            label="Add a Comment"
            outlined
            dense
            hide-details
            v-model="taskDetail.comment"
            :value="getTask.comment"
          >
            <template v-slot:prepend-inner>
              <v-icon color="#FF5959"> mdi-plus </v-icon>
            </template>
          </v-text-field>
          <v-file-input
            v-if="!isGetCompleted"
            accept="image/*"
            small-chips
            multiple
            label="File input"
            v-model="images"
          ></v-file-input>
          <kowi-button
            v-if="!isGetCompleted"
            :onClicked="completeTaskButton"
            :text="'Close Task'"
            :isActive="false"
          ></kowi-button>
        </div>

        <!-- images upload -->
        <h3 v-if="isGetCompleted" class="my-4">Upload image after changes</h3>

        <!-- carousel -->
        <kowi-carousel
          v-if="isGetCompleted"
          :images="getTask.userupload"
        ></kowi-carousel>
      </div>
    </div>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DayNight from "@/components/DayNight";
import AllReviewers from "@/components/AllReviewers";
import KowiButton from "@/components/KowiButton";
import StartButton from "./components/StartButton";
import ToolBar from "@/components/ToolBar.vue";
import UserMessage from "./components/UserMessage.vue";
import MyMessage from "./components/MyMessage.vue";
import AddComment from "./components/AddComment.vue";
import KowiCarousel from "@/components/KowiCarousel";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  components: {
    StartButton,
    KowiButton,
    AllReviewers,
    DayNight,
    AddComment,
    MyMessage,
    UserMessage,
    ToolBar,
    KowiCarousel,
  },
  data() {
    return {
      isCompleted: false,
      isDispute: false,
      dispute: {
        note: "",
      },
      images: null,
      taskDetail: {
        branchname: "",
        mergerequest: false,
        pullrequest: false,
        taskstatus: "completed",
        comment: "",
      },
    };
  },
  props: ["id"],

  methods: {
    ...mapActions([
      "fetchTask",
      "fetchAllThreads",
      "sendDoubt",
      "completeTask",
      "taskImageUpload",
    ]),

    switchComplete() {
      if (this.isDispute) this.isDispute = false;
      this.isCompleted = !this.isCompleted;
    },
    switchDispute() {
      if (this.isCompleted) this.isCompleted = false;
      this.isDispute = !this.isDispute;
    },
    async closeTask() {
      this.$vloading.show();
      await this.sendDoubt({
        token: this.userToken,
        doubt: this.dispute.note,
        task_id: this.id,
        cmntid: this.getTask.cmntids,
      }).then((res) => {
        console.log(res.data);
      });

      this.$vloading.hide();
      // Refresh page
      location.reload();
    },
    async completeTaskButton() {
      this.taskDetail.id = this.id;

      this.$vloading.show();
      await this.completeTask({
        token: this.userToken,
        data: this.taskDetail,
      }).then((res) => {
        console.log("success task");
      });
      // Image upload
      for (var image_index in this.images) {
        var _data = {
          image: this.images[image_index],
          id: this.id,
          caption: "kowi",
        };
        await this.taskImageUpload({
          token: this.userToken,
          data: _data,
        }).then((res) => {
          console.log(res);
        });
      }

      this.$vloading.hide();
      // Refresh page
      location.reload();
    },
  },
  computed: {
    ...mapGetters([
      "getAllTasksCount",
      "userToken",
      "getTask",
      "getAllThreads",
    ]),
    isGetCompleted() {
      var iscomplete = false;
      if (this.getTask.taskstatus == "completed") iscomplete = true;
      this.isCompleted = true;
      this.isDispute = false;
      return iscomplete;
    },
    isGetPending() {
      var ispending = false;
      if (this.getTask.taskstatus == "pending") ispending = true;
      return ispending;
    },
    isGetOngoing() {
      var isongoing = false;
      if (this.getTask.taskstatus == "ongoing") isongoing = true;
      return isongoing;
    },
    isGetDispute() {
      var isdispute = false;
      if (this.getTask.taskstatus == "dispute") isdispute = true;
      this.isCompleted = false;
      this.isDispute = true;
      return isdispute;
    },
  },

  async created() {
    this.$vloading.show();
    await this.fetchTask({ token: this.userToken, id: this.id }).then((res) => {
      if (res.taskstatus == "completed") {
        this.taskDetail.pullrequest = res.pullrequest;
        this.taskDetail.mergerequest = res.mergerequest;
        this.taskDetail.branchname = res.branchname;
        this.taskDetail.comment = res.comment;
      }
    });
    await this.fetchAllThreads({ token: this.userToken, id: this.getTask.cmntids, });

    this.$vloading.hide();
  },
};
</script>

<style scoped>
.task-container {
  padding: 20px 40px;
}

.image-border {
  border-radius: 15px;
  border: 2px solid black;
}
.suggestion-box {
  padding: 20px;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.suggetion-box-heading {
  font-weight: 700;
  margin-right: 10px;
}
</style>