<template>
  <v-btn
    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
    absolute
    dark
    fixed
    fab
    bottom
    small
    right
    color="#FF5A5A"
    style="bottom: 15px"
  >
    <v-icon>{{
      $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-brightness-2"
    }}</v-icon>
  </v-btn>
</template>