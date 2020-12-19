<template>
  <div></div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    currentPostIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    postAfter() {
      return this.currentPostIndex !== this.posts.length - 1
        ? this.posts[this.currentPostIndex + 1]
        : false
    },
    postBefore() {
      return this.currentPostIndex !== 0
        ? this.posts[this.currentPostIndex - 1]
        : false
    },
  },
}
</script>

<style lang="scss" scoped></style>
