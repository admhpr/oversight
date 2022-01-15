<template>
  <nav class="navbar">
    <div v-if="hasLogo" class="flex items-center">
      <nuxt-link
        to="/"
        class="navbar-logo"
        exact-active-class="no-active-style"
      >
        <img
          class="navbar-logo-image"
          src="~/assets/logo.png"
          alt="site logo"
        />
      </nuxt-link>
    </div>
    <div class="navbar-item-wrapper">
      <span v-for="{ name } in menu" :key="name" class="mr-5">
        <nuxt-link
          :to="`/${name}`"
          class="navbar-item"
          :class="activeRouteClass(name)"
          >{{ name }}</nuxt-link
        >
        {{ delimeter }}
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    delimeter: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: () => [{ name: 'blog' }, { name: 'notes' }, { name: 'archive' }],
    },
    hasLogo: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    activeRouteClass(route) {
      return this.$route.path === `/${route}` ? 'current-navbar-item' : ''
    },
  },
}
</script>

<style lang="scss">
.navbar {
  @apply py-3 px-5;
  color: $c-nav-link;
  font-family: $ff-sans;
  @include breakpoint($bk-navbar) {
    @apply flex justify-between items-center;
  }
}
.navbar-item {
  @apply mr-5;
  font-size: 1.25rem;
  @apply font-medium;
  &:last-child {
    @apply mr-0;
  }
  &:hover {
    border-bottom: 2px solid $c-primary;
  }
}
.navbar-item-wrapper {
  @apply text-center;
}
.navbar-logo {
  @apply flex items-center;
  @apply mx-auto mb-3;
  font-size: 1.3rem;
  @apply font-semibold;
  @include breakpoint($bk-navbar) {
    @apply mb-0;
  }
}
.navbar-logo-image {
  @apply inline-block;
  width: 36px;
  @apply mr-3;
}
.current-navbar-item {
  border-bottom: 2px solid $c-primary;
}
</style>
