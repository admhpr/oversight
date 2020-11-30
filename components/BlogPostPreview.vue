<template>
  <section>
    <time>{{ formatPublishDate }}</time>
    <article class="p-8">
      <h2 class="title">
        <nuxt-link class="subtitle underline" :to="path">
          ‡ {{ title.toLowerCase() }}</nuxt-link
        >
      </h2>
      <p v-if="desc" class="mb-10">{{ desc }}</p>
      <div class="flex justify-end">
        <nuxt-link class="subtitle underline" :to="path"> ❒ </nuxt-link>
      </div>
    </article>
    <hr />
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

<style lang="scss" scoped></style>
