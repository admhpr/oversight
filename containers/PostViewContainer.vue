<template>
  <div>
    <PostView :post="post" />
    <PostPagination
      v-show="hasPagination"
      :posts="posts"
      :current-post-index="currentPostIndex"
    />
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
    hasPagination: { type: Boolean, default: true },
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
    const postTypeLookup = {
      blog: this.$blogPosts,
      archive: this.$archivedPosts,
      notes: this.$notesPosts,
    }

    this.posts = Object.keys(postTypeLookup).includes(this.postType)
      ? postTypeLookup[this.postType]
      : this.$blogPosts
  },
}
</script>

<style lang="scss" scoped></style>
