<template>
  <div class="content">
    <ArchiveList :list="posts" />
  </div>
</template>

<script>
import ArchiveList from '~/components/list/ArchiveList'
export default {
  components: {
    ArchiveList,
  },
  async asyncData({ $content }) {
    const posts = await $content('archive').fetch()
    return {
      posts,
    }
  },
}
</script>

<style></style>
