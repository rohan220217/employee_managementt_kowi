<template>
  <div>
    <v-card class="px-4 py-2 rounded-lg">
      <v-img
        class="rounded-lg"
        height="250px"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
      >
        <v-fab-transition>
          <v-btn
            class="mb-6 mr-n3"
            small
            color="#ff5a5a"
            dark
            absolute
            bottom
            right
            fab
            @click="musicDialog = true"
          >
            <v-icon>mdi-play</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-img>
      <v-card-title class="pt-2 pb-0 pl-0 font-weight-bold">
        On the floor
      </v-card-title>

      <v-card-text class="pl-0">
        <div class="font-weight-bold">Jennifer Lopez, pitbull</div>
      </v-card-text>
    </v-card>
    <div class="text-center">
      <v-bottom-sheet inset v-model="musicDialog">
        <v-card tile>
          <v-progress-linear
            color="#ff5a5a"
            background-color="gray"
            :value="50"
            class="my-0"
            height="3"
          ></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title> On the floor</v-list-item-title>
                <v-list-item-subtitle
                  >Jennifer Lopez, pitbull</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card></v-bottom-sheet
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicDialog: false,
    };
  },
};
</script>

<style>
</style>