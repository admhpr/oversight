<template>
  <img :src="iconPath" :alt="`${name} icon`" :class="$style.small" />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconPath() {
      return require(`../assets/icons/${this.name}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.small {
  width: 30px;
  display: inline-block;
}
</style>
