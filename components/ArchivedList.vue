<template>
  <BlogPostList :list="adaptedPosts" />
</template>

<script>
export default {
  name: 'ArchivedList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    adaptedPosts() {
      return []
    },
  },
}
</script>

<style lang="scss" scoped></style>
