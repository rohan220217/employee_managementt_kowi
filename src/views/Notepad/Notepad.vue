<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <v-container class="mt-8">
      <v-row
        v-masonry
        transition-duration="0.3s"
        item-selector=".item"
        v-if="getAllNotes.length != 0"
      >
        <v-col
          v-for="(todo, no) in getAllNotes"
          :key="no"
          v-masonry-tile
          class="item"
          cols="12"
          md="4"
          style="padding: 10px 10px"
        >
          <v-card elevation="3" class="pa-2" :color="todo.hexcode">
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
              v-html="todo.desc"
            >
            </v-card-text>

            <v-card-subtitle class="">
              <span class="mt-4">{{
                dayjs(todo.createdat).format("DD-MMMM-YYYY, h:mm a")
              }}</span>
              <v-btn @click="remove(todo.id)" style="float: right" icon>
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn></v-card-subtitle
            >
          </v-card>
        </v-col></v-row
      >

      <Empty v-else />
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
          <v-text-field
            label="Enter Title"
            hide-details
            v-model="notepad.title"
          ></v-text-field>

          <v-textarea
            name="input-7-1"
            label="Write note +"
            v-model="notepad.desc"
          ></v-textarea>
          <v-color-picker
            width="100%"
            v-model="notepad.hexcode"
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
          <v-btn color="#2888FF" text @click="add()" :loading="isButtonLoading"
            >Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Masonry from "masonry-layout";
import Empty from "@/components/Empty";
import Loading from "@/components/Loading";
export default {
  data() {
    return {
      isButtonLoading: false,
      isLoading: false,
      dialog: false,
      notepad: {
        title: "",
        desc: "",
        hexcode: "#E2F8FF",
      },
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
  methods: {
    ...mapActions(["fetchUserNotepad", "addNote", "deleteNote"]),
    add() {
      this.isButtonLoading = true;
      this.addNote({ token: this.userToken, payload: this.notepad })
        .then((_) => {
          this.$toasted.show("Note added successfully", {
            type: "success",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account",
            iconPack: "mdi",
          });
        })
        .catch((err) => {
          this.$toasted.show(err, {
            type: "error",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account-alert",
            iconPack: "mdi",
          });
        })
        .finally(() => {
          this.isButtonLoading = false;
          this.dialog = false;
        });
    },
    remove(id) {
      this.deleteNote({ token: this.userToken, id: id })
        .then((res) => {
          this.$toasted.show("Sticky note deleted successfully", {
            type: "success",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account",
            iconPack: "mdi",
          });
        })
        .catch((err) => {
          this.$toasted.show(err, {
            type: "error",
            duration: 3000,
            position: "top-center",
            theme: "toasted-primary",
            icon: "mdi-account-alert",
            iconPack: "mdi",
          });
        });
    },
  },
  computed: {
    ...mapGetters(["userToken", "getAllNotes"]),
  },
  components: {
    Empty,
    Loading
  },
  mounted: function () {
    var msnry = new Masonry(".masonry", {
      // options
      itemSelector: "[class*='col-']",
    });
  },
  async created() {
    this.isLoading = true;
    await this.fetchUserNotepad(this.userToken);
    this.isLoading = false;
  },
};
</script>

<style>
</style>