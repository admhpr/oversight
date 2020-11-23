<template>
  <div class="content">
    <ArchivedList :list="posts" />
  </div>
</template>

<script>
import ArchivedList from '~/components/ArchivedList'
export default {
  components: {
    ArchivedList,
  },
  async asyncData({ $content }) {
    const posts = await $content('archived').fetch()
    return {
      posts,
    }
  },
}
</script>

<style></style>
