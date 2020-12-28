<template>
  <div>
    <PostView :post="post" />
    <PostPagination :posts="posts" :current-post-index="currentPostIndex" />
  </div>
</template>

<script>
import PostView from '~/components/post/PostView'
import PostPagination from '~/components/post/PostPagination'
export default {
  components: {
    PostView,
    PostPagination,
  },
  props: {
    post: { type: Object, required: true },
    postType: { type: String, required: true },
  },
  data() {
    return {
      posts: [],
    }
  },
  computed: {
    currentPostIndex() {
      return this.posts.findIndex((post) => this.post.path === post.path)
    },
  },
  created() {
    this.posts =
      this.postType === 'blog' ? this.$blogPosts : this.$archivedPosts
  },
}
</script>

<style lang="scss" scoped></style>
