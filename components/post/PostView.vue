<template>
  <main class="bg-white py-5 px-8 w-screen lg:w-full">
    <article>
      <p class="my-5">{{ formatPublishDate }}</p>
      <h1 class="title">{{ post.title.toLowerCase() }}</h1>
      <hr />
      <nuxt-content v-show="post" class="p-2" :document="post" />
    </article>
  </main>
</template>

<script>
export default {
  props: {
    post: { type: Object, required: true },
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.post.date)
      const time = this.post.date.split('T')[1]
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      return `${dateFormat.toLocaleDateString('en-IE', options)}, ${time}`
    },
  },
}
</script>

<style lang="scss"></style>
