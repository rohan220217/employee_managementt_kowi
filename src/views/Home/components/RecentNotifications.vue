<template>
  <div class="home-box-2">
    <div class="heading-text">Recent Notifications</div>
    <v-list-item v-for="i in 3" :key="i">
      <v-list-item-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          <span style="color: #0b8871"> Sakshi Sinha</span> created a new task:
          “Create a website for employee management”
        </v-list-item-title>

        <v-list-item-subtitle>
          <span style="color: #ff5a5a"> CEO</span> please look into the website
          layout and alignment and description the alignement of the buttons and
          description the alignement of the buttons...</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-action>
        <p class="caption">9:30 pm</p>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-box-2 {
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 5px #e0e0e0;
  -moz-box-shadow: 0 0 5px #e0e0e0;
  -webkit-box-shadow: 0 0 5px #e0e0e0;
}
.heading-text {
  font-weight: 500;
}
</style>