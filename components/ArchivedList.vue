<template>
  <div class="mt-5">
    <pre>
       {{ JSON.stringify(list) }}
   </pre
    >
  </div>
</template>

<script>
export default {
  name: 'BlogPostList',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
