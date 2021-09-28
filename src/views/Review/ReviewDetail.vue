<template>
  <div>
    <!-- Home app bar -->
    <tool-bar :isBack="true" :isTaskCount="false" />
    <!-- Main content -->
    <div class="task-container">
      {{ getTask }}
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
            :task_id="getTask.id"
            :comment_id="message.id"
            :cmntid="getTask.cmntids"
          ></add-comment>
        </div>
      </div>

      <add-comment
        v-if="getTask.cmntids"
        :task_id="getTask.id"
        class="mt-6"
        :cmntid="getTask.cmntids"
        :isComment="true"
      ></add-comment>
      <v-btn
        v-if="
          getTask.taskstatus == 'completed' || getTask.taskstatus == 'dispute'
        "
        color="#ff5a5a"
        dark
        class="rounded-lg mt-8"
        min-width="200px"
        @click="reviewedButton()"
        :loading="reviewButtonLoader"
        :disabled="getTask.iscompleted"
      >
        {{ getTask.taskstatus == "completed" ? "Resume" : "Review" }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserMessage from "../Task/components/UserMessage.vue";
import KowiCarousel from "@/components/KowiCarousel";
import ToolBar from "@/components/ToolBar.vue";
import StartButton from "@/components/StartButton";
import MyMessage from "../Task/components/MyMessage.vue";
import AddComment from "../Task/components/AddComment.vue";
export default {
  data() {
    return {
      reviewButtonLoader: false,
    };
  },
  components: {
    UserMessage,
    KowiCarousel,
    ToolBar,
    StartButton,
    MyMessage,
    AddComment,
  },

  props: ["id"],
  methods: {
    ...mapActions(["fetchTask", "fetchAllThreads", "checkReview"]),
    async reviewedButton() {
      this.reviewButtonLoader = true;
      await this.checkReview({
        token: this.userToken,
        id: this.id,
      }).then((res) => {
        console.log(res.data);
      });

      this.reviewButtonLoader = false;
      // Refresh page
      location.reload();
    },
  },
  computed: {
    ...mapGetters(["userToken", "getTask", "getAllThreads"]),
  },
  async created() {
    this.$vloading.show();
    await this.fetchTask({ token: this.userToken, id: this.id }).then(
      (res) => {}
    );

    await this.fetchAllThreads({
      token: this.userToken,
      id: this.getTask.cmntids,
    });

    this.$vloading.hide();
  },
};
</script>

<style  scoped>
.suggestion-box {
  padding: 20px;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.review-container {
  padding: 20px 40px;
}
.task-container {
  padding: 20px 40px;
}
</style>