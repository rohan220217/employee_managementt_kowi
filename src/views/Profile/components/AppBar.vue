<template>
  <v-app-bar dense app :color="$vuetify.theme.dark ? '#363636' : 'white'" elevation="1">
      <h3>{{dayjs().format("dddd, DD MMM YYYY ")}}</h3>
    
  </v-app-bar>
</template>

<script>
export default {

};
</script>

<style>
</style>