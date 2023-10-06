<template>
  <div class="flex max-w-full flex-wrap">
    <a
      v-for="{ name, count } in allTags"
      :key="name"
      :href="'#' + name"
      class="underline tag mr-5"
      @click="
        selectedTags.includes(name)
          ? $emit('tagRemoved', name)
          : $emit('tagSelected', name)
      "
      ><span> #{{ name }} </span>
      <span v-if="selectedTags.includes(name)">∅</span>
      <span v-else class="rounded-full bg-white px-2">{{ count }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    allTags: {
      type: Array,
      default: () => [],
    },
    selectedTags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
