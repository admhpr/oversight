<template>
  <div class="flex flex-col min-h-screen max-width-full">
    <NavBar />
    <hr />
    <main class="content-wrapper flex justify-center">
      <nuxt
        keep-alive
        class="my-5 content bg-white lg:w-3/5 md:w-full max-width-full"
      />
    </main>
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
main.content-wrapper {
  background: url('../assets/bg.png');
}
.content {
  border: double grey 4px;
}
</style>
