<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <h1>Officials Page</h1>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <v-layout row wrap>
          <v-flex
            v-for="(official, index) in officials"
            :key="index"
            xs12 sm6 md4
          >
            <v-card flat tile dark class="mx-auto">
              <v-hover>
                <v-img
                  slot-scope="{ hover }"
                  :src="official.url"
                  height="250px"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      <span class="hover-text">
                        {{ official.name }}<br>
                        {{ official.role }}<br>
                        <v-icon>location_on</v-icon> {{ official.state }}
                      </span>
                      <!-- <span class="hover-text">$14.99</span> -->
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-hover>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data () {
    return {
      size: 'sm',
      officials: []
    }
  },
  async created () {
    const officialsFolder = await firebase.firestore().collection('officials')
      .where('year', '==', new Date().getFullYear())
      .get()
    officialsFolder.forEach(el => {
      this.officials.push(el.data())
    })
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.hover-text {
  font-size: 24px;
  padding-left: 30px;
  /* justify-content: center; */
}
</style>
