<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="item in docsList" :key="item.id" xs12 sm6 md4>
        <v-card dark :color="tag(item.tag)">
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ item.name }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark target="_blank" :href="item.url">View Pdf</v-btn>
            <v-spacer />
            <div class="text-xs-center">
              <v-chip text-color="white" :color="tag(item.tag)" class="darken-2">
                <v-avatar :class="tag(item.tag)" class="darken-4"><v-icon>star</v-icon></v-avatar>
                {{ item.tag }}
              </v-chip>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data () {
    return {
      docsList: []
    }
  },
  methods: {
    tag (tag) {
      if (tag === 'Pro-Am') {
        return 'primary'
      } else if (tag === 'Am-Am') {
        return 'warning'
      } else if (tag === 'Mixed-Am') {
        return 'danger'
      }
    }
  },
  async created () {
    const regFolder = await firebase.firestore().collection('docs')
      .where('year', '==', new Date().getFullYear())
      .where('type', '==', 'registration')
      .get()
    regFolder.forEach(el => {
      this.docsList.push(el.data())
    })
  }
}
</script>
