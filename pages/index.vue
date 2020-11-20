<template>
  <div class="container mx-auto text-center">
    <div>
      <div class="flex justify-center">
        <logo />
      </div>
      <p class="title">thinking out loud</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../styles/_config.scss';

.title {
  color: $c-tertiary;
  font-family: $ff-sans;
  @apply font-semibold;
  @apply text-3xl;
  letter-spacing: 1px;
}
</style>
