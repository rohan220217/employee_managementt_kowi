<template>
  <div>
    <!-- Home app bar -->
    <tool-bar :isBack="true" :isTaskCount="true" />

    <!-- Main content -->
    <div class="task-container">
      {{ getTask }}
      <v-row>
        <v-col>
          <h2>{{ getTask.title }}</h2>
        </v-col>
        <v-col>
          <div class="start-button">Start Now</div>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col>
          <h3>Description</h3>
        </v-col>
        <v-col>
          <p class="red--text text-right font-weight-medium">
            <!-- 13 Aug 2021, 3:44pm -->
            {{ getTask.timelimit }} hr
          </p>
        </v-col>
      </v-row>
      <p>
        {{ getTask.description }}
      </p>

      <!-- carousel -->
      <v-carousel hide-delimiters height="auto" show-arrows-on-hover>
        <template v-slot:prev="{ on, attrs }">
          <v-btn small color="#FF5A5A" fab v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn small color="#FF5A5A" fab v-bind="attrs" v-on="on">
            <v-icon>mdi-chevron-right</v-icon></v-btn
          >
        </template>

        <v-carousel-item :key="i" v-for="i in 1">
          <v-layout row>
            <v-flex
              xs3
              :key="_key"
              v-for="(img, _key) in getTask.images"
              class="pa-4"
            >
              <v-img
                contain
                class="image-border"
                :src="'https://dev.kowi.in' + img.image"
              >
              </v-img>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>

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
          <user-message
            :userData="{
              name: message.username,
              url: 'https://cdn.vuetifyjs.com/images/john.jpg',
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
            <my-message
              :myData="{
                name: sub_message.username,
                url: 'https://cdn.vuetifyjs.com/images/john.jpg',
                message: sub_message.comment,
                time: sub_message.time,
                hexcode: sub_message.hexcode,
                tagged: message.tagged,
              }"
            ></my-message>
            <add-comment
              v-if="isGetPending"
              :task_id="getTask.id"
              :comment_id="message.id"
            ></add-comment>
          </div>
        </div>
      </div>
      <add-comment
        :task_id="getTask.id"
        class="mt-6"
        :isComment="true"
      ></add-comment>

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
                :input-value="getTask.pullrequest"
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
                :input-value="getTask.mergerequest"
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
            :value="getTask.branchname"
          >
            <template v-slot:prepend-inner>
              <v-icon color="#FF5959"> mdi-plus </v-icon>
            </template>
          </v-text-field>

          <!-- Reviewers -->
          <v-row>
            <v-col cols="4">
              <all-reviewers></all-reviewers>
            </v-col>
          </v-row>
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
            :onClicked="closeTask"
            :text="'Close Task'"
            :isActive="false"
          ></kowi-button>
        </div>

        <!-- images upload -->
        <h3 v-if="isGetCompleted" class="my-4">Upload image after changes</h3>

        <v-carousel
          v-if="isGetCompleted"
          hide-delimiters
          height="auto"
          show-arrows-on-hover
        >
          <v-carousel-item :key="i" v-for="i in 1">
            <v-layout row>
              <v-flex
                xs3
                :key="_key"
                v-for="(img, _key) in getTask.userupload"
                class="pa-4"
              >
                <v-img
                  contain
                  class="image-border"
                  :src="'https://dev.kowi.in' + img.image"
                >
                </v-img>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
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
import ToolBar from "@/components/ToolBar.vue";
import UserMessage from "./components/UserMessage.vue";
import MyMessage from "./components/MyMessage.vue";
import AddComment from "./components/AddComment.vue";
export default {
  components: {
    KowiButton,
    AllReviewers,
    DayNight,
    AddComment,
    MyMessage,
    UserMessage,
    ToolBar,
  },
  data() {
    return {
      images: [],
      isCompleted: false,
      isDispute: false,
    };
  },
  props: ["id"],

  methods: {
    ...mapActions(["fetchTask", "fetchAllThreads"]),

    switchComplete() {
      if (this.isDispute) this.isDispute = false;
      this.isCompleted = !this.isCompleted;
    },
    switchDispute() {
      if (this.isCompleted) this.isCompleted = false;
      this.isDispute = !this.isDispute;
    },
    closeTask() {
      alert();
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
    await this.fetchTask({ token: this.userToken, id: this.id });
    await this.fetchAllThreads({ token: this.userToken, id: this.id });
    this.$vloading.hide();
  },
};
</script>

<style scoped>
.task-container {
  padding: 20px 40px;
}
.start-button {
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 150px;
  border-radius: 15px;
  padding: 5px;
  color: white;
  background-color: #ff5a5a;
  float: right;
  cursor: pointer;
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