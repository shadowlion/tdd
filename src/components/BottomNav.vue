<template>
  <v-bottom-nav
    fixed
    color="white"
    :value="true"
    class="hidden-sm-and-up"
  >
    <bottom-nav-link
      v-for="link in links"
      :key="link.id"
      :title="link.title"
      :icon="link.icon"
      :url="link.url"
    />
  </v-bottom-nav>
</template>

<script>
import BottomNavLink from '@/components/BottomNavLink'

export default {
  components: {
    BottomNavLink
  },
  data () {
    return {
      bottomNav: 'recent',
      links: [
        {
          title: 'Venue',
          icon: 'location_on', // eslint-disable-next-line
          url: 'https://www.google.com/maps/place/Hyatt+Regency+Pittsburgh+International+Airport/@40.4968398,-80.2620192,17z/data=!3m1!4b1!4m5!3m4!1s0x88345cc35100f3c3:0x99eb7eaf3bd5875b!8m2!3d40.4968357!4d-80.2598305'
        },
        {
          title: 'Call Us',
          icon: 'phone',
          url: 'tel:4124187462'
        },
        {
          title: 'Email Us',
          icon: 'email',
          url: 'mailto:info@threediamonddancesport.com'
        }
      ]
    }
  }
}
</script>
