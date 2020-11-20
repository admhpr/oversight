<template>
  <div class="content">
    <BlogPostList :list="posts" />
  </div>
</template>

<script>
import BlogPostList from '~/components/BlogPostList'
export default {
  components: {
    BlogPostList,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return {
      posts,
    }
  },
}
</script>

<style></style>
