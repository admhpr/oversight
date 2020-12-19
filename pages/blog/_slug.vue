<template>
  <PostViewContainer :post="post" />
</template>

<script>
import PostViewContainer from '~/containers/PostViewContainer'
const postType = `blog`
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
}
</script>
