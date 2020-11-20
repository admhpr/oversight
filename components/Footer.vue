<template>
  <footer class="footer">
    <Socials />
    <div class="flex justify-center">adam harpur {{ currentYear }} ©</div>
    <div class="flex justify-center">
      <a href="https://www.nuxtjs.org"
        ><img
          class="pb-10 brand-logo"
          src="~/assets/nuxt-logo.jpg"
          alt="nuxt logo"
      /></a>
      <a href="https://tailwindcss.com"
        ><img
          class="pb-10 brand-logo"
          src="~/assets/tailwind-logo.png"
          alt="tailwind logo"
      /></a>
    </div>
  </footer>
</template>

<script>
import Socials from './Socials'
export default {
  components: {
    Socials,
  },
  computed: {
    currentYear() {
      const today = new Date()
      return today.getFullYear()
    },
  },
}
</script>

<style lang="scss">
@import '../styles/_config.scss';
.footer {
  @apply text-center;
  font-family: $ff-sans;
  @apply text-lg;
  @apply mt-12;
  @apply p-8;
  border-top: 2px solid $c-secondary;
}
.brand-logo {
  width: 32px;
  animation: 1s appear;
}
</style>
