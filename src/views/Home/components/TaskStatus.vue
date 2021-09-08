<template>
  <vc-donut v-bind="props" :background="$vuetify.theme.dark ? 'black' : 'white'">
    <h1>
      130 <br />
      Tasks
    </h1>
  </vc-donut>
</template>

<script>
export default {
  data() {
    return {
      props: {
        size: 175,
        sections: [
          { label: "Completed", value: 20, color: "#171D51" },
          { label: "Pending", value: 30, color: "#64C2F1" },
          { label: "Progress", value: 35, color: "#C1E2F3" },
          { label: "Queue", value: 15, color: "#4752B0" },
        ],
        thickness: 35, // set this to 100 to render it as a pie chart instead
        hasLegend: true,
      },
    };
  },
};
</script>

<style>
.cdc-legend-item-color {
  height: 0.5rem !important;
  width: 0.5em !important;
}
</style>