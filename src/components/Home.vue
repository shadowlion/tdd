<template>
  <v-layout
    text-xs-center
    wrap
  >
    <v-flex xs12>
      <v-img
        :src="require('../assets/logo.jpg')"
        class="my-3"
        contain
        height="200"
      />
    </v-flex>

    <v-flex xs12>
      <youtube :video-id="videoId"></youtube>
    </v-flex>

    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">
        Dancers!
      </h1>
      <p class="subheading font-weight-regular">
        We cordially invite you to the 7th annual Three Diamond Dancesport competition.
      </p>
      <v-btn color="primary" dark large>Register</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      videoId: 'USvuD3L0euE'
    }
  }
}
</script>
