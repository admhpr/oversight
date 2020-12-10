<template>
  <main>
    <article class="content">
      <p class="my-5">{{ formatPublishDate }}</p>
      <h1 class="title">{{ page.title.toLowerCase() }}</h1>
      <hr />
      <nuxt-content v-show="page" class="p-2" :document="page" />
    </article>
  </main>
</template>

<script>
export default {
  props: {
    page: { type: Object, required: true },
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.page.date)
      const time = this.page.date.split('T')[1]
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

<style lang="scss">
.nuxt-content {
  blockquote {
    font-style: italic;
    @apply ml-3;
    @apply px-3;
    border-left: solid 2px $c-primary;
  }
  a {
    color: $c-secondary;
    font-family: $ff-sans;
    @apply font-semibold;
    @apply text-lg;
    @apply underline;
    letter-spacing: 1px;
  }
  a[target='_blank']:after {
    content: '∉';
  }
  h2 {
    color: $c-secondary;
    font-family: $ff-sans;
    @apply font-bold;
    @apply mt-5 mb-5;
    @apply pb-3;
    @apply text-2xl;
    line-height: 1.3;
  }
  h3 {
    color: $c-secondary;
    font-family: $ff-sans;
    @apply font-bold;
    @apply mt-5 mb-5;
    @apply pb-3;
    @apply text-xl;
    line-height: 1.3;
  }
  p,
  li {
    line-height: 1.7;
    font-size: 16px;
    font-family: $ff-sans;
    @include breakpoint(600px) {
      font-size: 18px;
    }
  }
  p {
    @apply mb-4;
  }
  ul,
  ol {
    @apply list-decimal;
    @apply list-inside;
    @apply mb-4;
  }
}
</style>
