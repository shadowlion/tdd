<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <h1>Officials Page</h1>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <v-layout row wrap>
          <v-flex
            v-for="n in 9"
            :key="n"
            xs4
          >
            <v-card flat tile>
              <v-hover>
                <v-img
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="250px"
                />
              </v-hover>
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
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
