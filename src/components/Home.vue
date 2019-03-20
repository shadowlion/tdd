<template>
  <v-layout
    text-xs-center
    wrap
  >
    <v-flex xs12>
      <v-img
        :src="require('../assets/logo.png')"
        class="my-3"
        contain
        height="80vh"
      />
    </v-flex>

    <v-flex xs12>
      <!-- <iframe
        width="vidWidth"
        height="vidHeight"
        :src="`https://www.youtube.com/embed/${videoId}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> -->
      <!-- <youtube
        :video-id="videoId"
        :player-width="vidWidth"
        :player-height="vidHeight"
      /> -->
    </v-flex>

    <v-flex mb-4>
      <h1 class="display-2 font-weight-bold mb-3">
        Dancers!
      </h1>
      <p class="subheading font-weight-regular">
        We cordially invite you to the 7th annual Three Diamond Dancesport competition.
      </p>
      <v-btn color="primary" dark large>Register</v-btn>
      <v-container grid-list-md>
        <v-layout justify-center wrap>
          <v-flex d-flex>
            <v-card
              class="card"
              color="primary"
              dark
              max-width="400"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  stars
                </v-icon>
                <span class="headline font-weight-bold">Workshops</span>
              </v-card-title>

              <v-card-text class="title">
                Join us on Saturday, June 1st for fun workshops and the social dance!
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" class="darken-2">More Info</v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              class="card"
              color="green"
              dark
              max-width="400"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  assignment_ind
                </v-icon>
                <span class="headline font-weight-bold">Collegiate</span>
              </v-card-title>

              <v-card-text class="title">
                Attention Collegiate Dancers: Click below to find <b>all</b> the forms you need to register!
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="green"
                  class="darken-2"
                  href="https://firebasestorage.googleapis.com/v0/b/three-diamond-dancesport.appspot.com/o/2019%2Fdocs%2Fcollegiate_package.zip?alt=media&token=0abd1718-3a66-4427-851e-c50aab5c21de"
                  target="_blank"
                >
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-card
              class="card"
              color="orange"
              dark
              max-width="400"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                >
                  alarm_on
                </v-icon>
                <span class="headline font-weight-bold">Schedule</span>
              </v-card-title>

              <v-card-text class="title">
                Find your heatlist and times here!
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" class="darken-2">Go to Page</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      videoId: 'UiV8FPwUChk',
      vidWidth: null,
      vidHeight: null
    }
  },
  created () {
    const calcWidth = 640 * (window.innerWidth / 1280)
    const calcHeight = 360 * (window.innerHeight / 800)
    this.vidWidth = calcWidth <= 320 ? 320 : calcWidth
    this.vidHeight = calcHeight <= 180 ? 180 : calcHeight
  }
}
</script>

<style scoped>
.card {
  margin: 12px;
}
</style>
