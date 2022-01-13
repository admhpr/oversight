<template>
  <div class="content">
    <section class="p-10">
      <nuxt-content :document="page"></nuxt-content>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('start').fetch()
    return {
      page,
    }
  },
}
</script>

<style lang="scss"></style>
