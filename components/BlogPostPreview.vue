<template>
  <section>
    <time>{{ formatPublishDate }}</time>
    <h2>
      <a :href="path">{{ title }}</a>
    </h2>
    <p v-if="desc">{{ desc }}</p>
    <nuxt-link :to="path">Read More</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'BlogPostPreview',
  props: {
    published: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.published)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return dateFormat.toLocaleDateString('en-IE', options)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/_config.scss';
</style>
