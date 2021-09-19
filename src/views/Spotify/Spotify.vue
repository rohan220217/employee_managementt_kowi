<template>
  <div>
    <tool-bar></tool-bar>
    <v-container fluid class="px-6">
      <v-text-field
        class=""
        prepend-inner-icon="mdi-magnify"
        label="Search"
        solo
        dense
        single-line
        hide-details
      ></v-text-field>
      <h3 class="main-color pl-3 mt-4">Recently Played</h3>
      <h3 class="main-color text-right mt-n7">See All</h3>

      <v-row class="mt-1">
        <v-col v-for="i in 4" :key="i" cols="12" sm="3">
          <spotify-card></spotify-card>
        </v-col>
      </v-row>
      <h3 class="main-color pl-3 mt-4">Trending Now</h3>
      <h3 class="main-color text-right mt-n7">See All</h3>

      <v-row class="mt-1">
        <v-col v-for="i in 4" :key="i" cols="12" sm="3">
          <spotify-card></spotify-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import SpotifyCard from "./components/SpotifyCard";
import DayNight from "@/components/DayNight";
export default {
  components: {
    SpotifyCard,
    ToolBar,
    DayNight
  },
};
</script>

<style>
</style>