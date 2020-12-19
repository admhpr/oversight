<template>
  <div>
    <PostView :post="post" />
  </div>
</template>

<script>
import PostView from '~/components/PostView'
export default {
  components: {
    PostView,
  },
  props: {
    post: { type: Object, required: true },
    postType: { type: String, required: true },
  },
  data() {
    return {
      pages: [],
    }
  },
  computed: {
    currentPageIndex() {
      return this.pages.findIndex((page) => this.page.path === page.path)
    },
    pageAfter() {
      return this.currentPageIndex !== this.pages.length - 1
        ? this.pages[this.currentPageIndex + 1]
        : false
    },
    pageBefore() {
      return this.currentPageIndex !== 0
        ? this.pages[this.currentPageIndex - 1]
        : false
    },
  },
  async created() {
    this.pages = await this.$content(this.postType).fetch()
  },
}
</script>

<style lang="scss" scoped></style>
