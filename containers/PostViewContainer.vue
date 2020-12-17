<template>
  <div>
    <PostView :page="page" />
  </div>
</template>

<script>
import PostView from '~/components/PostView'
export default {
  components: {
    PostView,
  },
  props: {
    page: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped></style>
