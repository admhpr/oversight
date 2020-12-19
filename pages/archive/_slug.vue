<template>
  <PostViewContainer :post="post" :post-type="postType" />
</template>

<script>
import PostViewContainer from '~/containers/PostViewContainer'
const postType = `archive`
export default {
  components: {
    PostViewContainer,
  },
  async asyncData(ctx) {
    const post = await ctx.$content(`${postType}/${ctx.params.slug}`).fetch()
    return {
      post,
    }
  },
  data() {
    return {
      postType,
    }
  },
}
</script>
