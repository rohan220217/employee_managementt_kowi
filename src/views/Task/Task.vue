<template>
  <div>
    <!-- Home app bar -->
    <app-bar />

    <!-- Main content -->
    <div class="task-container">
      <v-row>
        <v-col>
          <h2>XYZ Development</h2>
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
            13 Aug 2021, 3:44pm
          </p>
        </v-col>
      </v-row>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia
        excepturi quibusdam nisi, assumenda repellendus itaque eligendi
        provident optio sequi dignissimos, facilis eveniet! Hic illum dolor
        eveniet eius recusandae nesciunt. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam quia excepturi quibusdam nisi, assumenda
        repellendus itaque eligendi provident optio sequi dignissimos, facilis
        eveniet! Hic illum dolor eveniet eius recusandae nesciunt.
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
            <v-flex xs3 :key="j" v-for="j in 4" class="pa-4">
              <v-img
                contain
                class="image-border"
                src="https://avatars.githubusercontent.com/u/51409281?v=4"
              >
              </v-img>
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>

      <div class="suggestion-box">
        <p>
          <span class="suggetion-box-heading">Suggestions :- </span> Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quos autem sapiente
          impedit, pariatur nemo, dolorem voluptate eius repudiandae dicta eos
          nesciunt, fugiat id necessitatibus! Doloribus dolorum accusantium amet
          minus ducimus.
        </p>
        <p>
          <span class="suggetion-box-heading"
            >Previous Developer of Screen :-
          </span>
          Rohan kumar
        </p>
        <p><span class="suggetion-box-heading">Revisions </span> #10</p>
        <p>
          <span class="suggetion-box-heading">Comments of Reviewer :- </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos autem
          sapiente impedit, pariatur nemo, dolorem voluptate eius repudiandae
          dicta eos nesciunt, fugiat id necessitatibus! Doloribus dolorum
          accusantium amet minus ducimus.
        </p>
      </div>

      <!-- Chat content -->
      <div class="suggestion-box">
        <user-message
          :userData="{
            name: 'Rohan Kumar',
            url: 'https://cdn.vuetifyjs.com/images/john.jpg',
            message:
              ' please look into the website layout and alignment and description the alignement of the buttons and description the alignement of the   buttons...',
            time: '9:30 pm',
          }"
        ></user-message>
        <my-message
          :myData="{
            name: 'Rohan Kumar',
            message:
              ' please look into the website layout and alignment and description the alignement of the buttons and description the alignement of the   buttons...',
            time: '9:30 pm',
          }"
        ></my-message>
        <user-message
          :userData="{
            name: 'Rohan Kumar',
            url: 'https://cdn.vuetifyjs.com/images/john.jpg',
            message:
              ' please look into the website layout and alignment and description the alignement of the buttons and description the alignement of the   buttons...',
            time: '9:30 pm',
          }"
        ></user-message>
        <my-message
          :myData="{
            name: 'Rohan Kumar',
            message:
              ' please look into the website layout and alignment and description the alignement of the buttons and description the alignement of the   buttons...',
            time: '9:30 pm',
          }"
        ></my-message>
      </div>

      <v-text-field
        class="mt-8"
        label="Add a comment/ doubt"
        outlined
        dense
        hide-details
        append-icon="mdi-send"
        @click:append="alert()"
      >
        <template v-slot:prepend-inner>
          <v-icon color="#FF5959"> mdi-plus </v-icon>
        </template>
      </v-text-field>

      <!-- Button -->
      <v-row class="mt-4">
        <v-col cols="12" sm="2">
          <div class="complete-button">Completed My Task</div>
        </v-col>
        <v-col cols="12" sm="2">
          <div class="dispute-button">Dispute</div>
        </v-col>
      </v-row>

      <!-- images upload -->
      <h3 class="my-4">Upload image after changes</h3>
    </div>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DayNight from "@/components/DayNight";
import AppBar from "./components/AppBar.vue";
import UserMessage from "./components/UserMessage.vue";
import MyMessage from "./components/MyMessage.vue";
export default {
  components: {
    DayNight,
    MyMessage,
    UserMessage,
    AppBar,
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions([""]),
  },
  computed: {
    ...mapGetters(["getAllTasksCount"]),
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
.complete-button {
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid #ff5a5a;
  padding: 5px;
  color: #ff5a5a;
  cursor: pointer;
}
.dispute-button {
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  width: 200px;
  border-radius: 10px;
  padding: 6px;
  color: white;
  background-color: #ff5a5a;
  cursor: pointer;
}
</style>