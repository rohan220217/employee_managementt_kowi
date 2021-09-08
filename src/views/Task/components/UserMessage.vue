<template>
  <v-list-item class="pa-0">
    <v-list-item-avatar>
      <img :src="userData.url" alt="John" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title class="font-weight-medium">
        <span style="color: #0b8871"> {{userData.name}}</span>
      </v-list-item-title>

      <v-list-item-subtitle>
       {{userData.message}}</v-list-item-subtitle
      >
    </v-list-item-content>

    <v-list-item-action>
      <p class="caption">{{userData.time}}</p>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>