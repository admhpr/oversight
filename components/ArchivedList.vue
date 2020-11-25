<template>
  <BlogPostList :list="adaptedPosts" />
</template>

<script>
function createBlogPostItem(archivedItem) {
  const {
    body,
    date = Date.now(),
    extension,
    path,
    title,
    taxonomy = {},
  } = archivedItem
  const tags = taxonomy.tags || []
  return { body, date: String(date), desc: '', extension, path, title, tags }
}
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
      return this.list.map((post) => createBlogPostItem(post))
    },
  },
}
</script>

<style lang="scss" scoped></style>
