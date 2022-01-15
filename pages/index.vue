<template>
  <div class="content">
    <section class="p-10">
      <nuxt-content :document="page"></nuxt-content>
    </section>
    <section>
      <NavBar :has-logo="false" :menu="menu" />
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
export default {
  components: {
    NavBar,
  },
  async asyncData({ $content }) {
    const page = await $content('index').fetch()
    return {
      page,
    }
  },
  data() {
    return {
      menu: [{ name: 'about' }],
    }
  },
}
</script>

<style lang="scss"></style>
