<template>
  <div class="content">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()
    return { page }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-content {
  h1 {
    @apply mt-5;
    @apply mb-3;
    @apply font-bold;
    font-family: $ff-sans;
    @apply text-4xl;
  }
  p {
    font-family: $ff-serif;
    @apply mb-3;
  }
}
</style>
