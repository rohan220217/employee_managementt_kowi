<template>
  <div :class="isComment ? '' : 'ml-8 mb-3'">
    <v-slide-x-transition>
      <v-row>
        <v-col cols="3" v-show="expand">
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
        <v-col cols="8" class="pl-0" v-show="expand">
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
        <v-col cols="1">
          <v-btn @click="expand = !expand" text icon color="green lighten-2">
            <v-icon> {{expand ? 'mdi-message-minus-outline'  : 'mdi-message-plus-outline'}} </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-slide-x-transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    tags: 0,
    comment: "",
    isLoading: false,
    expand: false,
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
    ...mapActions(["fetchAllEmployees", "sendComment", "sendSubComment"]),
    send() {
      if (this.isComment)
        this.sendComment({
          token: this.userToken,
          task_id: this.task_id,
          comment: this.comment,
          tags: this.tags,
        }).then((res) => {
          console.log(res.data);
          this.comment = "";
          this.tags = 0;
        });
      else
        this.sendSubComment({
          token: this.userToken,
          task_id: this.task_id,
          comment: this.comment,
          tags: this.tags,
          comment_id: this.comment_id,
        }).then((res) => {
          console.log(res.data);
          this.comment = "";
          this.tags = 0;
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