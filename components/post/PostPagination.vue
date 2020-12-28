<template>
  <section
    class="mb-5 flex flex-col sm:flex-row"
    :class="postAfter && postBefore ? '' : 'justify-end'"
  >
    <hr />

    <nuxt-link v-if="postAfter" :to="postAfter.path" class="p-5 navbar-item">
      <span class="text-xl">← {{ postAfter.title }} </span>
    </nuxt-link>

    <hr />
    <nuxt-link
      v-if="postBefore"
      :to="postBefore.path"
      class="ml-auto p-5 navbar-item"
    >
      <span class="text-xl">{{ postBefore.title }} →</span>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    currentPostIndex: {
      type: Number,
      required: true,
    },
  },
  computed: {
    postAfter() {
      return this.currentPostIndex !== 0
        ? this.posts[this.currentPostIndex - 1]
        : false
    },
    postBefore() {
      return this.currentPostIndex !== this.posts.length - 1
        ? this.posts[this.currentPostIndex + 1]
        : false
    },
  },
}
</script>

<style lang="scss" scoped></style>
