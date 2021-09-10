<template>
  <v-app-bar dense app :color="$vuetify.theme.dark ? '#363636' : 'white'" elevation="1">
      <h3>{{dayjs().format("dddd, DD MMM YYYY ")}}</h3>
    <v-spacer></v-spacer>
    <v-avatar size="36">
      <img
        src="https://avatars.githubusercontent.com/u/51409281?v=4"
        alt="user"
      />
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {

};
</script>

<style>
</style>