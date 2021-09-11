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

    <kowi-button
      class="mt-8"
      :text="'Add Collaborators'"
      :onClicked="addNewCollaborator"
      :isActive="false"
    ></kowi-button>

    {{ collaborators }}
    <v-row
      v-for="(collab_row, collab_row_i) in collaborators"
      :key="`NEW_COLLAB_${collab_row_i}`"
      class=""
    >
      <v-col cols="12" sm="3" class="py-1">
        <all-reviewers
          v-model="collaborators[collab_row_i]"
          :label="'Add Collaborators'"
        ></all-reviewers>
      </v-col>
      <v-col cols="12" sm="9" class="py-0">
        <v-textarea
          dense
          label="Add a description"
          outlined
          flat
          hide-details
          class="mt-7"
          rows="1"
        ></v-textarea>
      </v-col>
    </v-row>

    <p class="mt-4 mb-0">Upload Images</p>
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
    AllReviewers,
    KowiButton,
  },
  data() {
    return {
      collaborators: [],
    };
  },
  methods: {
    addNewCollaborator() {
      this.collaborators.push({
        collaborator: null,
        collaborator_description: "",
      });
    },
  },
};
</script>

<style>
</style>