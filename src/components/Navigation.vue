<template>
  <section>
    <v-toolbar app fixed clipped-left color="primary" dark>
      <v-toolbar-side-icon @click.stop="toggleDrawer" />
      <v-toolbar-title>Three Diamond Dancesport</v-toolbar-title>
      <v-spacer />
      <v-toolbar-side-icon
        href="https://www.facebook.com/threediamonddancesport"
        target="_blank"
      >
        <v-icon size="24px">fab fa-facebook</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list class="pa-1 hidden-sm-and-up" dense>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="@/assets/logo.jpg" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Three Diamond Dancesport</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0">
        <v-divider light class="hidden-sm-and-up" />
        <v-list-tile
          v-for="link in navLinks"
          :key="link.id"
          :to="link.url">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navLinks: [
        { title: 'Home', icon: 'home', url: '/' },
        { title: 'Registration', icon: 'how_to_vote', url: '/registration' },
        { title: 'Officials', icon: 'people', url: '/officials' },
        { title: 'Rules', icon: 'assignment', url: '/rules' }
      ]
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
