<template>
    <!-- multiple -->
  <v-autocomplete
    v-model="reviewers"
    :items=" getAllReviewers"
    chips
    outlined
    :label="label"
    item-text="name"
    item-value="id"
    class="mt-6"
    hide-details
    height="10"
    dense
    :loading="isLoading"
  >
    <template v-slot:prepend-inner>
      <v-icon color="#FF5959"> mdi-plus </v-icon>
    </template>
    <template v-slot:selection="data">
      <v-chip
        small
        color="#FFCBCB"
        v-bind="data.attrs"
        :input-value="data.selected"
        @click="data.select"
      >
        <v-avatar left>
          <v-img :src="'https://dev.kowi.in' + data.item.pic"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip>
    </template>
    <template v-slot:item="data">
      <v-list-item-avatar>
        <img :src="'https://dev.kowi.in' + data.item.pic" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-html="data.item.name"></v-list-item-title>
      </v-list-item-content>
    </template>
  </v-autocomplete>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      isLoading: false,
      reviewers: this.value ? this.value : null,
    };
  },
  props: {
    value: {
      type: Number,
    },
    label: {
      type: String,
      default: "Add Reviewers",
    },
    // default_value: {
    //   type: String
    // }
  },

  methods: {
    ...mapActions(["fetchAllReviewers"]),
  },
  watch: {
    reviewers: function (new_val) {
      this.$emit("input", new_val);
    },
  },
  computed: {
    ...mapGetters(["getAllReviewers", "userToken"]),
  },

  async created() {
    this.isLoading = true;
    await this.fetchAllReviewers(this.userToken);
    this.isLoading = false;
  },
};
</script>