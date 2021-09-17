<template>
  <v-card  outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          <v-list-item class="pa-0">
            <v-list-item-avatar class="mr-2 mt-1 mb-0">
              <v-img
                src="https://avatars.githubusercontent.com/u/51409281?v=4"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="py-0">
              <v-list-item-title>Rohan Kumar</v-list-item-title>
              <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-title>
        <v-list-item-subtitle>May </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-progress-circular
          rotate="-90"
          size="100"
          width="10"
          value="20"
          color="green"
        >
          20%
        </v-progress-circular>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>