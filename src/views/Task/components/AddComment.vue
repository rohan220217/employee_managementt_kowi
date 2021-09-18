<template>
  <div :class="isComment ? '' : 'ml-8'">
    <v-row>
      <v-col cols="3">
        <v-autocomplete
          v-model="values"
          :items="items"
          dense
          hide-details
          chips
          small-chips
          label="Solo"
          multiple
          solo
        ></v-autocomplete
      ></v-col>
      <v-col cols="9" class="pl-0">
        <v-text-field
          hide-details
          solo
          dense
          :label="isComment ? 'Add Comment' : 'Add Sub Comment'"
          required
        >
          <template v-slot:append>
            <v-icon color="#FF5A5A" @click="sendComment()"> mdi-send</v-icon>
          </template></v-text-field
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
    value: null,
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
    sendComment() {
      console.log(this.task_id);
      console.log(this.comment_id);
      console.log(this.isComment);
    },
  },
};
</script>

<style>
</style>