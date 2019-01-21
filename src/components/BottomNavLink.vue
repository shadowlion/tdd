<template>
  <v-btn flat :href="url">
    <span>{{ title }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    title: String,
    icon: String,
    url: String
  }
}
</script>
