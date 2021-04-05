<template>
  <div class="content">
    <BlogPostList :list="notes" />
  </div>
</template>

<script>
import BlogPostList from '~/components/list/BlogPostList'
export default {
  components: {
    BlogPostList,
  },
  async asyncData({ $content }) {
    const notes = await $content('notes').fetch()
    return {
      notes,
    }
  },
}
</script>

<style></style>
