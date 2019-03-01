<template>
  <v-app>
    <navigation />

    <v-content>
      <v-container fluid text-xs-center>
        <router-view />
      </v-container>
    </v-content>

    <bottom-nav />
    <main-footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import BottomNav from './components/BottomNav'
import MainFooter from './components/MainFooter'

export default {
  name: 'App',
  components: {
    Navigation,
    BottomNav,
    MainFooter
  }
}
</script>

<style>
@media screen and (max-width: 450px) {
  body {
    padding-bottom: 56px;
  }
}
</style>
