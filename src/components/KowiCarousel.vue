<template>
  <!-- carousel -->
  <v-carousel hide-delimiters height="auto" show-arrows-on-hover>
    <template v-slot:prev="{ on, attrs }">
      <v-btn small color="#FF5A5A" fab v-bind="attrs" v-on="on">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn small color="#FF5A5A" fab v-bind="attrs" v-on="on">
        <v-icon>mdi-chevron-right</v-icon></v-btn
      >
    </template>

    <v-carousel-item :key="i" v-for="i in 1">
      <v-layout row>
        <v-flex xs3 :key="_key" v-for="(img, _key) in images" class="pa-4">
          <v-img
            contain
            class="image-border"
            :src="'https://dev.kowi.in' + img.image"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
};
</script>

<style>
</style>