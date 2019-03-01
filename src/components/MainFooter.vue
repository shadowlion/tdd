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
        :key="link.id"
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
        &copy;{{ year }} |
        <strong>Three Diamond Dancesport</strong> |
        <a href="mailto:info@threediamonddancesport.com">info@threediamonddancesport.com</a> |
        <a href="tel:4124187462">(412) 418-7462</a>
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
        { route: 'Rules', url: '/rules' }
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
