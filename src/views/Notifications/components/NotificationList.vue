<template>
  <v-list-item>
    <v-list-item-avatar size="55">
      <img :src="'https://dev.kowi.in' + data.createdby.pic" alt="User" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title class="font-weight-bold">
        <span :style="`color: ${data.hexcode}`">{{ data.createdby.name }}</span>
        {{ data.task ? "created a new task:" : ".................." }} “{{
          data.title
        }}”
      </v-list-item-title>

      <v-list-item-subtitle> {{ data.desc }}</v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <p class="caption">
        {{ dayjs(data.time).format("h:mm a") }}
        <v-btn x-small icon :color="data.starred ? '#ED8500' : 'gray'">
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </p>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>