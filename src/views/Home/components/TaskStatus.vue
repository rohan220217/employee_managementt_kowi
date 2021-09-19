<template>
  <vc-donut
    v-bind="props"
    :background="$vuetify.theme.dark ? 'black' : 'white'"
  >
    <h1>
      {{total_task}} <br />
      Tasks
    </h1>
  </vc-donut>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      total_task: 0,
      props: {
        size: 175,
        sections: [
          { label: "Ongoing", value: 20, color: "#171D51" },
          { label: "Completed", value: 30, color: "#64C2F1" },
          { label: "Pending", value: 35, color: "#C1E2F3" },
          { label: "Dispute", value: 15, color: "#4752B0" },
        ],
        thickness: 35, // set this to 100 to render it as a pie chart instead
        hasLegend: true,
      },
    };
  },
  methods: {
    ...mapActions(["fetchTaskStatus"]),
  },
  computed: {
    ...mapGetters(["userToken"]),
  },
  async created() {
    await this.fetchTaskStatus(this.userToken).then((res) => {
      this.total_task = res.ongoing + res.completed + res.dispute + res.pending;
      this.props.sections[0].value = (res.ongoing / this.total_task) * 100;
      this.props.sections[1].value = (res.completed / this.total_task) * 100;
      this.props.sections[2].value = (res.pending / this.total_task) * 100;
      this.props.sections[3].value = (res.dispute / this.total_task) * 100;
    });
  },
};
</script>

<style>
.cdc-legend-item-color {
  height: 0.5rem !important;
  width: 0.5em !important;
}
</style>