<template>
  <v-alert
      border="left"
      colored-border
      color="#0B8871"
      elevation="1"
      class="py-0 ml-8 multi-line"
    >
      <v-list-item class="pa-0">
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">
            <span style="color: #0b8871">{{ myData.name}}</span>
          </v-list-item-title>

          <v-list-item-subtitle>
            {{myData.message}}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-action>
          <p class="caption">{{myData.time}}</p>
        </v-list-item-action>
      </v-list-item>
    </v-alert>
</template>

<script>
export default {
 props: {
    myData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>