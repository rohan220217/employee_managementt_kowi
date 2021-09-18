<template>
  <v-list-item class="pa-0">
    <v-list-item-avatar>
      <img :src="userData.url" alt="John" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title class="font-weight-medium">
        <span :style="`color: ${userData.hexcode}`"> {{ userData.name }}</span>
      </v-list-item-title>

      <v-list-item-subtitle>
        <span
          v-for="(tag, key) in userData.tagged"
          :key="`tag-user-${key}`"
          :style="`color: ${tag.taguserhexcode}`"
          >@{{ tag.tagusername }}
        </span>
        {{ userData.message }}</v-list-item-subtitle
      >
    </v-list-item-content>

    <v-list-item-action>
      <p class="caption">
        {{ dayjs(userData.time).format("DD-MM-YY, h:mm a") }}
      </p>
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