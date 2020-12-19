<template>
  <div>
    <PostView :post="post" />
    <PostPagination :posts="posts" :current-post-index="currentPostIndex" />
  </div>
</template>

<script>
import PostView from '~/components/PostView'
import PostPagination from '~/components/PostPagination'
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
  async created() {
    this.posts = await this.$content(this.postType).fetch()
  },
}
</script>

<style lang="scss" scoped></style>
