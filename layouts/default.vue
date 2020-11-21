<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />
    <hr />
    <nuxt class="flex-1" keep-alive />
    <hr />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import NavBar from '~/components/NavBar'
export default {
  components: {
    Footer,
    NavBar,
  },
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.content {
  @apply mx-auto;
  @apply px-8;
  max-width: 740px;
}
</style>
