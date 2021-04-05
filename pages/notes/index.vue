<template>
  <div class="content">
    <p class="font-mono mt-5 ml-5">For my future self...</p>
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
