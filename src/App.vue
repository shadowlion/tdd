<template>
  <v-app>
    <navigation />

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <bottom-nav />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import BottomNav from './components/BottomNav'

export default {
  name: 'App',
  components: {
    Navigation,
    BottomNav
  }
}
</script>
