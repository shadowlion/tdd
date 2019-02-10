<template>
  <v-footer
    height="auto"
    color="primary lighten-1"
    class="hidden-sm-and-down"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
        :to="link.url"
      >
        {{ link.route }}
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;{{ year }} — <strong>Three Diamond Dancesport</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { route: 'Home', url: '/' },
        { route: 'Registration', url: '/registration' },
        { route: 'Officials', url: '/officials' },
        { route: 'Rules', url: '/rules' },
        { route: 'Contact Us', url: '/contact-us' }
      ]
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
