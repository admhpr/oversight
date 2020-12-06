<template>
  <PostView :page="page" />
</template>

<script>
import PostView from '~/components/PostView'
const pageType = `archive`
export default {
  components: {
    PostView,
  },
  async asyncData(ctx) {
    const page = await ctx.$content(`${pageType}/${ctx.params.slug}`).fetch()
    return {
      page,
    }
  },
}
</script>
