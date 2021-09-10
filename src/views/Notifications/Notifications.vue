<template>
  <div>
    <!-- Notification app bar -->
    <app-bar />

    <v-tabs color="#ED8500" vertical class="my-tabs">
      <v-tab class="mt-4">
        <v-icon left> mdi-bell-ring </v-icon>
        All
      </v-tab>
      <v-tab>
        <v-icon left> mdi-email </v-icon>
        Task
      </v-tab>
      <v-tab>
        <v-icon left> mdi-email-minus </v-icon>
        Unread
      </v-tab>
      <v-tab>
        <v-icon left> mdi-star-circle </v-icon>
        Starred
      </v-tab>

      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">All</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Tasks</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Unread</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
      <v-tab-item class="mt-7 mr-8 ml-1">
        <h3 style="color: #ff5a5a">Starred</h3>
        <v-list class="pa-0" v-for="i in 3" :key="i" three-line>
          <notification-list></notification-list>
          <v-divider></v-divider>
        </v-list>
      </v-tab-item>
     
    </v-tabs>

    <!-- Switch button -->
    <day-night />
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import NotificationList from "./components/NotificationList.vue";
import DayNight from "@/components/DayNight";
export default {
  components: {
    NotificationList,
    AppBar,
    DayNight,
  },
  data() {
    return {
      items: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
};
</script>

<style>
div.my-tabs [role="tab"] {
  justify-content: flex-start;
}
</style>