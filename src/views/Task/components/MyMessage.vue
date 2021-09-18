<template>
  <v-alert
    border="left"
    colored-border
    :color="myData.hexcode"
    elevation="1"
    class="py-0 ml-8 multi-line"
  >
    <v-list-item class="pa-0">
      <v-list-item-content>
        <v-list-item-title class="font-weight-medium">
          <span :style="`color: ${myData.hexcode}`">{{ myData.name }}</span>
        </v-list-item-title>

        <v-list-item-subtitle>
          <span
            v-for="(tag, key) in myData.tagged"
            :key="`tag-user-${key}`"
            :style="`color: ${tag.taguserhexcode}`"
            >@{{ tag.tagusername }}
          </span>
          {{ myData.message }}</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-action>
        <p class="caption">
          {{ dayjs(myData.time).format("DD-MM-YY, h:mm a") }}
        </p>
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
};
</script>

<style>
</style>