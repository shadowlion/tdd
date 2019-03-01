<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <p>Find the forms you need to register below:</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
        <v-data-table
          :headers="headers"
          :items="docsList"
          class="elevation-2"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.tag }}</td>
            <td class="text-xs-left">
              <v-btn small flat fab color="primary" :href="props.item.url" target="_blank">
                <v-icon>cloud_download</v-icon>
              </v-btn>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data () {
    return {
      docsList: [],
      headers: [
        { text: 'name', value: 'name', sortable: true },
        { text: 'tag', value: 'tag', sortable: true },
        { text: 'download', value: 'url', sortable: false }
      ]
    }
  },
  methods: {
    tag (tag) {
      switch (tag) {
        case 'Pro-Am':
          return 'primary'
        case 'Am-Am':
          return 'warning'
        case 'Mixed-Am':
          return 'green'
        case 'All':
          return 'purple'
        case 'Required':
          return 'red'
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
