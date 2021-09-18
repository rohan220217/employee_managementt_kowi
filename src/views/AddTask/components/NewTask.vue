<template>
  <v-container fluid class="mt-4">
    <v-subheader>Task Name</v-subheader>
    <v-text-field
      outlined
      dense
      flat
      solo
      hide-details
      class="mb-4"
      label="Add a title"
    ></v-text-field>

    <v-subheader>Task Description</v-subheader>
    <v-textarea
      solo
      label="Add a description"
      outlined
      flat
      hide-details
      class="mb-4"
    ></v-textarea>

    <v-row>
      <v-col cols="12" sm="2">
        <v-subheader>Time Limit</v-subheader>
        <v-text-field
          outlined
          dense
          flat
          solo
          hide-details
          class="mb-4"
          label="00:00:00 hr"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <all-reviewers :label="'Assign'"></all-reviewers>
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
    >
      <template v-slot:append>
        <v-icon color="#FF5A5A"> mdi-link-variant</v-icon>
      </template>
    </v-text-field>

    <v-subheader>Previous Developer</v-subheader>
    <v-text-field
      outlined
      dense
      flat
      solo
      hide-details
      class="mb-4"
      label="If none leave it blank"
    >
    </v-text-field>

    <v-subheader>Comment</v-subheader>
    <v-text-field
      outlined
      dense
      flat
      solo
      hide-details
      class="mb-4"
      label="Add a comment"
    >
    </v-text-field>

    <v-subheader>Upload Images</v-subheader>
    <v-file-input
      accept="image/*"
      small-chips
      multiple
      label="File input"
    ></v-file-input>

    <kowi-button
      :onClicked="review"
      class="mt-8"
      :text="'Review'"
      :isActive="true"
    ></kowi-button>
  </v-container>
</template>

<script>
import KowiButton from "@/components/KowiButton";
import AllReviewers from "@/components/AllReviewers";
export default {
  components: {
    KowiButton,
    AllReviewers,
  },
  methods: {
    review(){
      
    }
  }
};
</script>

<style>
</style>