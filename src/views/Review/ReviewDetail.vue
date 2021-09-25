<template>
  <div>
    <!-- Home app bar -->
    <tool-bar :isBack="true" :isTaskCount="false" />

    <!-- Main content -->
    <div class="review-container">
      <h3 style="color: #ff5a5a">Task 221</h3>
      <h3>
        Lorem ipsum dolor sit amet consescipit aliquam alias unde minima
        voluptates doloreprovident!
      </h3>
      <p class="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nobis
        fugiat totam odit in. Cupiditate animi, quisquam vero excepturi nihil
        magnam saepe! Animi repellat beatae laborum odio esse vel
        exercitationem!
      </p>

      <kowi-carousel :images="images"></kowi-carousel>

      <div class="suggestion-box">
        <div>
          <user-message
            :userData="{
              name: 'message.username',
              url: 'https://cdn.vuetifyjs.com/images/john.jpg',
              message: 'message.comment',
              time: 'message.time',
              hexcode: 'message.hexcode',
              tagged: 'm',
            }"
          ></user-message>
          <user-message
            :userData="{
              name: 'message.username',
              url: 'https://cdn.vuetifyjs.com/images/john.jpg',
              message: 'message.comment',
              time: 'message.time',
              hexcode: 'message.hexcode',
              tagged: 'm',
            }"
          ></user-message>
        </div>
      </div>
      <v-text-field
        outlined
        dense
        flat
        solo
        hide-details
        class="mt-4"
        label="Add a Comment"
      >
        <template v-slot:append>
          <v-icon color="#FF5A5A" class="mr-1"> mdi-link-variant</v-icon>
          <v-icon color="#FF5A5A"> mdi-send</v-icon>
        </template>
      </v-text-field>

      <v-btn color="#ff5a5a" dark class="rounded-lg mt-8" min-width="200px"
        >Reviewed</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserMessage from "../Task/components/UserMessage.vue";
import KowiCarousel from "@/components/KowiCarousel";
import ToolBar from "@/components/ToolBar.vue";
export default {
  data() {
    return {
      images: [
        {
          image: "/media/tasks/None/Screenshot_from_2021-09-16_21-24-51.png",
          caption: "gvfyhrfhdgsdg",
        },
      ],
    };
  },
  components: {
    UserMessage,
    KowiCarousel,
    ToolBar
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
</style>