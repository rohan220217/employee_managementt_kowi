<template>
  <!-- multiple -->
  <v-autocomplete
    v-model="employees"
    :items="getAllEmployees"
    item-text="name"
    item-value="empid"
    chips
    outlined
    multiple
    :label="label"
    class="mt-6"
    hide-details
    height="10"
    dense
    :loading="isLoading"
  >
    <template v-slot:selection="data">
      <v-chip small color="#FFCBCB" v-bind="data.attrs">
        {{ data.item.name }}
      </v-chip>
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
      employees: this.value ? this.value.collaborator : null,
    };
  },
  props: {
    value: {
      type: Array,
    },
    label: {
      type: String,
      default: "Tag Employee",
    },
  },

  methods: {
    ...mapActions(["fetchAllEmployees"]),
  },
  watch: {
    employees: function (new_val) {
      this.$emit("input", new_val);
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