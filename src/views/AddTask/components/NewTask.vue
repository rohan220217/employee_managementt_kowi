<template>
  <v-container fluid class="mt-4">
    <v-caption>Task Name</v-caption>
    <v-text-field
      outlined
      dense
      flat
      solo
      hide-details
      class="mb-4"
      label="Add a title"
    ></v-text-field>

    <v-caption>Task Description</v-caption>
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
        <v-caption>Time Limit</v-caption>
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

    <v-caption>Suggestions</v-caption>
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

    <v-caption>Previous Developer</v-caption>
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

    <v-caption>Comment</v-caption>
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

    <v-caption>Upload Images</v-caption>
    <v-file-input
      accept="image/*"
      small-chips
      multiple
      label="File input"
    ></v-file-input>

    <kowi-button class="mt-8" :text="'Review'" :isActive="true"></kowi-button>
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
};
</script>

<style>
</style>