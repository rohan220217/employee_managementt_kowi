<template>
  <div :class="isComment ? '' : 'ml-8'">
    <v-row>
      <v-col cols="3">
        <v-autocomplete
          v-model="tags"
          :items="getAllEmployees"
          item-text="name"
          item-value="empid"
          dense
          hide-details
          chips
          small-chips
          label="Tag User"
          multiple
          solo
          :loading="isLoading"
        >
          <template v-slot:selection="data">
            <v-chip small color="#FFCBCB" v-bind="data.attrs">
              {{ data.item.name }}
            </v-chip>
          </template>
        </v-autocomplete></v-col
      >
      <v-col cols="9" class="pl-0">
        <v-text-field
          hide-details
          v-model="comment"
          solo
          dense
          :label="isComment ? 'Add Comment' : 'Add Sub Comment'"
          required
        >
          <template v-slot:append>
            <v-icon color="#FF5A5A" @click="send()"> mdi-send</v-icon>
          </template></v-text-field
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    tags: 0,
    comment: "",
    isLoading: false,
  }),
  props: {
    isComment: {
      type: Boolean,
      default: false,
    },
    task_id: {
      type: Number,
    },
    comment_id: {
      type: Number,
      required: false,
    },
  },
  methods: {
    ...mapActions(["fetchAllEmployees", "sendComment"]),
    send() {
      console.log(this.task_id);
      console.log(this.comment_id);
      console.log(this.isComment);

      if (this.isComment)
        this.sendComment({
          token: this.userToken,
          task_id: this.task_id,
          comment: this.comment,
          tags: this.tags
        });
    },
  },
  computed: {
    ...mapGetters(["getAllEmployees", "userToken"]),
  },

  async created() {
    this.isLoading = true;
    await this.fetchAllEmployees(this.userToken);
    this.isLoading = false;
  },
};
</script>

<style>
</style>