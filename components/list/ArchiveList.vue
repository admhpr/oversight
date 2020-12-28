<template>
  <BlogPostList :list="adaptedPosts" />
</template>

<script>
function createBlogPostItem(archivedItem) {
  const {
    body,
    date = Date.now(),
    desc = '',
    extension,
    path,
    title,
    taxonomy = {},
  } = archivedItem
  const tags = taxonomy.tag || []
  return { body, date: String(date), desc, extension, path, title, tags }
}
export default {
  name: 'ArchiveList',
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
