<template>
  <PostViewContainer :page="page" />
</template>

<script>
import PostViewContainer from '~/containers/PostViewContainer'
const pageType = `blog`
export default {
  components: {
    PostViewContainer,
  },
  async asyncData(ctx) {
    const page = await ctx.$content(`${pageType}/${ctx.params.slug}`).fetch()
    return {
      page,
    }
  },
}
</script>
