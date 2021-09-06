<template>
  <div>
    <!-- Home app bar -->
    <app-bar />

    <!-- weather & meet -->
    <v-container fluid class="px-8">
      <v-row>
        <v-col cols="12" sm="3">
          <v-card height="136" class="">
            <v-card-text>
              <div class="text-body-2 mb-1">{{ dayjs() }}</div>
              <v-row>
                <v-col>
                  <p
                    class="font-weight-light mb-1"
                    style="font-size: 1.5rem; line-height: 1.5rem"
                  >
                    Good Morning
                  </p>
                  <div class="text-h5">Rohan</div>
                </v-col>
                <v-col>
                  <v-img contain src="@/assets/svg/cloud.svg" height="75">
                  </v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card height="136">
            <v-card-text>
              <v-row>
                <v-col>
                  <div class="text-h6">Join Meet</div>
                </v-col>
                <v-col class="text-right">
                  <v-btn depressed rounded color="error" width="100">
                    Join
                  </v-btn>
                </v-col>
              </v-row>
              <v-text-field
                @click="he()"
                readonly
                disabled
                class="mt-4"
                filled
                dense
                label="https://meet.google.com/frn-kvyh-yyj"
                append-outer-icon="mdi-content-copy"
              ></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card>
            <v-card-title> lsffjj </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-card height="310" class="mt-4">
        <v-card-text>
         <p class="font-weight-bold">Recent Notifications</p>
        </v-card-text>
      </v-card>
    </v-container>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import DayNight from "@/components/DayNight";
import AppBar from "./components/AppBar.vue";

export default {
  name: "Home",

  components: {
    AppBar,
    DayNight,
  },

  methods: {
    he() {
      console.log("sdfsd");
    },
  },
};
</script>
