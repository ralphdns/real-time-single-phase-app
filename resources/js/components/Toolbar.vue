<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn flat>FORUM</v-btn>
      <v-btn flat>ASK QUESTIONS</v-btn>
      <v-btn flat>CATEGORY</v-btn>

      <router-link to="/login">
        <!-- this will goto route.js, pick login link, then render its components -->
        <v-btn flat>LOGIN</v-btn>
     </router-link>
      
    </div>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
