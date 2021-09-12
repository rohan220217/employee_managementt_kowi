<template>
  <div>
    <p style="color: #ff5a5a" class="font-weight-medium">Permanent Address</p>

    <!-- Address 1  -->
    <v-text-field solo label="Address 1 " required></v-text-field>

    <!-- Address 2  -->
    <v-text-field solo label="Address 2 " required></v-text-field>

    <!-- Landmark  -->
    <v-text-field solo label="Landmark " required></v-text-field>

    <!-- Pincode  -->
    <v-text-field solo :counter="5" label="Pincode " required></v-text-field>

    <v-row>
      <v-col cols="12" sm="6">
        <!-- City  -->
        <v-text-field solo label="City " required></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <!-- State  -->
        <v-text-field solo label="State " required></v-text-field>
      </v-col>
    </v-row>

    <!-- Country  -->
    <v-text-field solo label="Country " required></v-text-field>

    
    <p style="color: #ff5a5a" class="font-weight-medium">Current Address</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>