<template>
  <img src="~/assets/logo.png" alt="site logo" class="logo" />
</template>

<style lang="scss" module>
.logo {
  max-width: 150px !important;
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
