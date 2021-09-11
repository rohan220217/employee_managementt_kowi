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
    <v-navigation-drawer
      permanent
      expand-on-hover
      app
      class="navigation-shadow"
    >
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="custom-active-list">
          <v-list-item link to="/home" @click="changeActive('home')">
            <v-list-item-icon>
              <span class="icon icon-bike"></span>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="21"
                  :fill="list['home'] ? '#FF5A5A' : '#535353'"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.27419 16.7449L11.0993 27.4174C11.3502 28.3891 11.8521 28.875 13.1067 28.875H30.1693C30.6711 28.875 31.4239 28.6321 31.6748 27.4174C31.7076 27.2584 31.7851 26.3685 31.8924 25.1359C32.1066 22.6753 32.4397 18.849 32.774 16.7449C32.9943 15.3587 32.2722 14.144 30.5158 14.7849L26.1545 17.4572L22.8926 11.1408C22.3907 10.4121 21.1362 10.1692 20.3833 11.141C19.553 12.2129 18.3568 14.1933 17.4198 15.7446C16.9978 16.4432 16.6284 17.0549 16.3686 17.4572L11.6012 14.7849C10.0956 14.0561 8.84103 15.0279 9.27419 16.7449ZM10.6931 16.0875L12.4495 27.5053H30.0405L31.2685 16.0875L25.2464 19.4885L21.4826 11.9576L16.7151 19.4885L10.6931 16.0875Z"
                  fill="white"
                />
              </svg>
              <!-- <v-img contain src="@/assets/icon/logo.svg" width="24px"></v-img> -->
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            to="/notifications"
            @click="changeActive('notifications')"
          >
            <v-list-item-icon>
              <svg
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C13.4951 0 12.2763 1.2172 12.2763 2.72V3.07594C7.58017 4.28577 4.10502 8.5327 4.10502 13.6V16.8566C4.10502 19.019 3.6603 21.1439 2.83092 23.12H27.1691C26.3397 21.1453 25.895 19.019 25.895 16.8566V13.6C25.895 8.5327 22.4198 4.28577 17.7237 3.07594V2.72C17.7237 1.2172 16.5049 0 15 0ZM1.38127 25.84C1.20081 25.8375 1.02163 25.8707 0.854166 25.938C0.686699 26.0052 0.534277 26.1049 0.405757 26.2315C0.277238 26.358 0.175184 26.5088 0.105527 26.6751C0.0358704 26.8413 0 27.0198 0 27.2C0 27.3802 0.0358704 27.5587 0.105527 27.7249C0.175184 27.8912 0.277238 28.042 0.405757 28.1685C0.534277 28.2951 0.686699 28.3948 0.854166 28.462C1.02163 28.5293 1.20081 28.5625 1.38127 28.56H11.1538C10.9972 28.9965 10.9162 29.4564 10.9144 29.92C10.9144 31.0021 11.3448 32.0398 12.111 32.805C12.8772 33.5701 13.9164 34 15 34C16.0836 34 17.1228 33.5701 17.889 32.805C18.6552 32.0398 19.0856 31.0021 19.0856 29.92C19.0846 29.4565 19.0046 28.9966 18.8489 28.56H28.6187C28.7992 28.5625 28.9784 28.5293 29.1458 28.462C29.3133 28.3948 29.4657 28.2951 29.5942 28.1685C29.7228 28.042 29.8248 27.8912 29.8945 27.7249C29.9641 27.5587 30 27.3802 30 27.2C30 27.0198 29.9641 26.8413 29.8945 26.6751C29.8248 26.5088 29.7228 26.358 29.5942 26.2315C29.4657 26.1049 29.3133 26.0052 29.1458 25.938C28.9784 25.8707 28.7992 25.8375 28.6187 25.84H15H1.38127Z"
                  :fill="list['notifications'] ? '#FF5A5A' : '#535353'"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/tasks" @click="changeActive('tasks')">
            <v-list-item-icon>
              <svg
                width="26"
                height="34"
                viewBox="0 0 26 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.6191 8.88315L17.1691 0.383154C16.9247 0.137308 16.5945 0 16.25 0H2.6C1.1635 0 0 1.17038 0 2.61538V31.3846C0 32.8296 1.1635 34 2.6 34H23.4C24.8365 34 26 32.8296 26 31.3846V9.80769C26 9.46115 25.8635 9.129 25.6191 8.88315ZM5.85 17C4.7736 17 3.9 16.1212 3.9 15.0385C3.9 13.9557 4.7736 13.0769 5.85 13.0769C6.9264 13.0769 7.8 13.9557 7.8 15.0385C7.8 16.1212 6.9264 17 5.85 17ZM20.8 17H11.7C10.9824 17 10.4 16.4142 10.4 15.6923C10.4 14.9705 10.9824 14.3846 11.7 14.3846H20.8C21.5176 14.3846 22.1 14.9705 22.1 15.6923C22.1 16.4142 21.5176 17 20.8 17ZM5.85 22.2308C4.7736 22.2308 3.9 21.352 3.9 20.2692C3.9 19.1865 4.7736 18.3077 5.85 18.3077C6.9264 18.3077 7.8 19.1865 7.8 20.2692C7.8 21.352 6.9264 22.2308 5.85 22.2308ZM20.8 22.2308H11.7C10.9824 22.2308 10.4 21.6449 10.4 20.9231C10.4 20.2012 10.9824 19.6154 11.7 19.6154H20.8C21.5176 19.6154 22.1 20.2012 22.1 20.9231C22.1 21.6449 21.5176 22.2308 20.8 22.2308ZM5.85 27.4615C4.7736 27.4615 3.9 26.5828 3.9 25.5C3.9 24.4172 4.7736 23.5385 5.85 23.5385C6.9264 23.5385 7.8 24.4172 7.8 25.5C7.8 26.5828 6.9264 27.4615 5.85 27.4615ZM20.8 27.4615H11.7C10.9824 27.4615 10.4 26.8757 10.4 26.1538C10.4 25.432 10.9824 24.8462 11.7 24.8462H20.8C21.5176 24.8462 22.1 25.432 22.1 26.1538C22.1 26.8757 21.5176 27.4615 20.8 27.4615ZM16.9 10.4615C16.1824 10.4615 15.6 9.87569 15.6 9.15385V2.48985L23.5248 10.4615H16.9Z"
                  :fill="list['tasks'] ? '#FF5A5A' : '#535353'"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item>
          <v-list-item
            link
            to="/collaborators"
            @click="changeActive('collaborators')"
          >
            <v-list-item-icon>
              <v-img contain src="@/assets/icon/users.svg" width="24px"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Collaborators</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/notepad" @click="changeActive('notepad')">
            <v-list-item-icon>
              <svg
                width="31"
                height="26"
                viewBox="0 0 31 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.58333 0C1.89819 0 1.24111 0.273928 0.756641 0.761522C0.272172 1.24912 0 1.91044 0 2.6C0 3.28956 0.272172 3.95088 0.756641 4.43848C1.24111 4.92607 1.89819 5.2 2.58333 5.2C3.26848 5.2 3.92556 4.92607 4.41003 4.43848C4.8945 3.95088 5.16667 3.28956 5.16667 2.6C5.16667 1.91044 4.8945 1.24912 4.41003 0.761522C3.92556 0.273928 3.26848 0 2.58333 0ZM11.625 0L9.04167 2.6L11.625 5.2H24.5417C25.2547 5.2 25.8333 4.6176 25.8333 3.9V1.3C25.8333 0.5824 25.2547 0 24.5417 0H11.625ZM2.58333 10.4C1.89819 10.4 1.24111 10.6739 0.756641 11.1615C0.272172 11.6491 0 12.3104 0 13C0 13.6896 0.272172 14.3509 0.756641 14.8385C1.24111 15.3261 1.89819 15.6 2.58333 15.6C3.26848 15.6 3.92556 15.3261 4.41003 14.8385C4.8945 14.3509 5.16667 13.6896 5.16667 13C5.16667 12.3104 4.8945 11.6491 4.41003 11.1615C3.92556 10.6739 3.26848 10.4 2.58333 10.4ZM11.625 10.4L9.04167 13L11.625 15.6H29.7083C30.4213 15.6 31 15.0176 31 14.3V11.7C31 10.9824 30.4213 10.4 29.7083 10.4H11.625ZM2.58333 20.8C1.89819 20.8 1.24111 21.0739 0.756641 21.5615C0.272172 22.0491 0 22.7104 0 23.4C0 24.0896 0.272172 24.7509 0.756641 25.2385C1.24111 25.7261 1.89819 26 2.58333 26C3.26848 26 3.92556 25.7261 4.41003 25.2385C4.8945 24.7509 5.16667 24.0896 5.16667 23.4C5.16667 22.7104 4.8945 22.0491 4.41003 21.5615C3.92556 21.0739 3.26848 20.8 2.58333 20.8ZM11.625 20.8L9.04167 23.4L11.625 26H19.375C20.088 26 20.6667 25.4176 20.6667 24.7V22.1C20.6667 21.3824 20.088 20.8 19.375 20.8H11.625Z"
                  :fill="list['notepad'] ? '#FF5A5A' : '#535353'"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>NotePad</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/add_task" @click="changeActive('add_task')">
            <v-list-item-icon>
              <svg
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 0C1.074 0 0 1.08679 0 2.42857V29.1429C0 30.4846 1.074 31.5714 2.4 31.5714H12.6211C11.4715 29.835 10.8 27.7476 10.8 25.5C10.8 19.4638 15.6348 14.5714 21.6 14.5714C22.4256 14.5714 23.2272 14.6728 24 14.8513V9.10714C24 8.78536 23.874 8.47689 23.6484 8.2486L15.8484 0.355748C15.6228 0.127462 15.318 0 15 0H2.4ZM14.4 2.31236L21.7148 9.71429H15.6C14.9376 9.71429 14.4 9.17029 14.4 8.5V2.31236ZM21.6 17C16.9608 17 13.2 20.8056 13.2 25.5C13.2 30.1944 16.9608 34 21.6 34C26.2392 34 30 30.1944 30 25.5C30 20.8056 26.2392 17 21.6 17ZM21.6 20.6429C22.2624 20.6429 22.8 21.1856 22.8 21.8571V24.2857H25.2C25.8624 24.2857 26.4 24.8285 26.4 25.5C26.4 26.1715 25.8624 26.7143 25.2 26.7143H22.8V29.1429C22.8 29.8144 22.2624 30.3571 21.6 30.3571C20.9376 30.3571 20.4 29.8144 20.4 29.1429V26.7143H18C17.3376 26.7143 16.8 26.1715 16.8 25.5C16.8 24.8285 17.3376 24.2857 18 24.2857H20.4V21.8571C20.4 21.1856 20.9376 20.6429 21.6 20.6429Z"
                 :fill="list['add_task'] ? '#FF5A5A' : '#535353'"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title>Add Task</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-spacer> </v-spacer>

      <template v-slot:append>
        <v-list>
          <v-list-item link @click="logout()">
            <v-list-item-icon>
              <v-icon style="color: #ff5a5a">mdi-location-exit</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="color: #ff5a5a">
              Log Out</v-list-item-title
            >
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
    return {
      list: {
        home: true,
        notifications: false,
        tasks: false,
        collaborators: false,
        notepad: false,
        add_task: false,
      },
    };
  },
  methods: {
    ...mapActions(["logoutUser"]),

    changeActive(name) {
      this.defaultValue();
      this.list[name] = true;
    },

    defaultValue() {
      this.list["home"] = false;
      this.list["notifications"] = false;
      this.list["tasks"] = false;
      this.list["collaborators"] = false;
      this.list["notepad"] = false;
      this.list["add_task"] = false;
    },

    logout() {
      this.logoutUser();
      this.$router.push({ name: "Login" });
    },
  },
  computed: {
    ...mapGetters([]),
  },
};
</script>

<style scoped>
svg {
  width: 24px;
  height: 24px;
}
circle:active {
  fill: red;
}
.custom-active-list {
  color: red !important;
}
.navigation-shadow {
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
</style>