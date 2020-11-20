<template>
  <img src="~/assets/logo.png" alt="site logo" class="logo" />
</template>

<style lang="scss" module>
.logo {
  width: 150px;
  @apply mx-auto;
  animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
