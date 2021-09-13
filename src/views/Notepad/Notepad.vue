<template>
  <div>
    <v-container class="mt-8">
      <v-row v-masonry transition-duration="0.3s" item-selector=".item">
        <v-col
          v-for="(todo, no) in todoList"
          :key="no"
          v-masonry-tile
          class="item"
          cols="12"
          md="4"
          style="padding: 10px 10px"
        >
          <v-card elevation="3" class="pa-2" :color="todo.color">
            <v-img
              class="mt-n3 mr-n3"
              style="float: right"
              height="30"
              width="30"
              src="@/assets/icon/push-pin2.svg"
            ></v-img>

            <v-card-title class="py-1 mb-0"> {{ todo.title }}</v-card-title>
            <v-card-text
              class="py-0"
              style="white-space: pre-wrap"
              v-html="todo.content"
            >
            </v-card-text>

            <v-card-subtitle class="">
              <span class="mt-4">{{
                dayjs().format("DD-MMMM-YYYY, h:mm a")
              }}</span>
              <v-btn @click="dialog = false" style="float: right" icon>
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn></v-card-subtitle
            >
          </v-card>
        </v-col></v-row
      >
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          absolute
          dark
          fixed
          fab
          bottom
          right
          color="#FF5A5A"
          style="bottom: 15px"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text class="pt-2">
          <v-text-field label="Enter Title" hide-details></v-text-field>

          <v-textarea name="input-7-1" label="Write note +"></v-textarea>
          <v-color-picker
            width="100%"
            v-model="color"
            class="pa-0"
            hide-canvas
            hide-inputs
            hide-sliders
            :swatches="swatches"
            show-swatches
          ></v-color-picker>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#2888FF" text @click="dialog = false">Add </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Masonry from "masonry-layout";
export default {
  data() {
    return {
      dialog: false,
      color: "#E2F8FF",
      todoList: [
        { title: "sdfsdf", content: "sfdsdfdsf", color: "#FFC0C0" },
        {
          title: "sdfsdf",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, vitae impedit? Aperiam eaque, eveniet ipsum mollitia libero magnam harum sint officia minima cumque quaerat fugiat iusto, nostrum veniam neque! Nobis?",
          color: "#F0FFD8",
        },
        { title: "sdfsdf", content: "sfdsdfdsf", color: "#FFC0C0" },
        {
          title: "sdfsdf",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, vitae impedit? Aperiam eaque, eveniet ipsum mollitia libero magnam harum sint officia minima cumque quaerat fugiat iusto, nostrum veniam neque! Nobis?",
          color: "#F0FFD8",
        },
        { title: "sdfsdf", content: "sfdsdfdsf", color: "#FFC0C0" },
        {
          title: "sdfsdf",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, vitae impedit? Aperiam eaque, eveniet ipsum mollitia libero magnam harum sint officia minima cumque quaerat fugiat iusto, nostrum veniam neque! Nobis?",
          color: "#F0FFD8",
        },
        { title: "sdfsdf", content: "sfdsdfdsf", color: "#FFC0C0" },
        {
          title: "sdfsdf",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, vitae impedit? Aperiam eaque, eveniet ipsum mollitia libero magnam harum sint officia minima cumque quaerat fugiat iusto, nostrum veniam neque! Nobis?",
          color: "#F0FFD8",
        },
      ],
      swatches: [
        ["#FFC0C0"],
        ["#FFE1C6"],
        ["#EDFFC8"],
        ["#E2F8FF"],
        ["#F8EAFF"],
        ["#F9CCCC"],
        ["#F0FFD8"],
        ["#FFC3D5"],
      ],
    };
  },
  mounted: function () {
    var msnry = new Masonry(".masonry", {
      // options
      itemSelector: "[class*='col-']",
    });
  },
};
</script>

<style>
</style>