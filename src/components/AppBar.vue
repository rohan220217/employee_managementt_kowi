<template>
  <div>
      <!--    <v-app-bar flat dense app color="transparent">
      <v-spacer></v-spacer>
 <v-toolbar-title
        ><v-img max-height="70" max-width="70" src="@/assets/kowi_logo.svg">
        </v-img
      ></v-toolbar-title>
      <v-btn to="/" active-class="active" text color="#535353" class="ml-4"
        >Tasks</v-btn
      >
      <v-btn text to="/about" active-class="active" color="#535353" class="ml-2"
        >Collaborations</v-btn
      >
      <v-btn
        text
        to="/timeline"
        active-class="active"
        color="#535353"
        class="ml-2"
        >Timeline</v-btn
      > 

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="ml-8"
            v-bind="attrs"
            v-on="on"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
            >{{
              $vuetify.theme.dark
                ? "mdi-white-balance-sunny"
                : "mdi-brightness-2"
            }}</v-icon
          >
        </template>
        <span>Day/ Night mode</span>
      </v-tooltip>
    </v-app-bar>
-->
    <v-navigation-drawer permanent expand-on-hover app>
    

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="$router.push({ name: 'Home' })">
          <v-list-item-icon>
            <v-img contain src="@/assets/icon/logo.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="$router.push('/home')">
          <v-list-item-icon>
             <v-img contain src="@/assets/icon/notification.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>Notifications</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
           <v-img contain src="@/assets/icon/task.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>Task</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
             <v-img contain src="@/assets/icon/users.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>Users</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
             <v-img contain src="@/assets/icon/list.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>List</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
             <v-img contain src="@/assets/icon/add.svg" width="24px"></v-img>
          </v-list-item-icon>
          <v-list-item-title>Add Task</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-spacer> </v-spacer>

      <template v-slot:append>
        <v-list>
          <v-list-item link @click="logout()">
            <v-list-item-icon>
              <v-icon style="color: red">mdi-location-exit</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: red"> Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["logoutUser"]),

    logout() {
      this.logoutUser();
      this.$router.push({name: 'Login'})
    },
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>

<style scoped>
.active {
  border-bottom: solid;
  border-color: red;
  box-shadow: 0 4px 8px 0 rgb(256 0 0 / 20%);
  border-radius: 5px;
  transition: 0.3s;
  color: white !important;
}
</style>