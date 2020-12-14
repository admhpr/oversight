<template>
  <div class="flex max-w-full flex-wrap">
    <a
      v-for="year in allYears"
      :key="year"
      class="underline tag mr-5"
      @click="
        selectedYears.includes(year)
          ? $emit('yearRemoved', year)
          : $emit('yearSelected', year)
      "
      ><span> {{ year }} </span>
      <span v-if="selectedYears.includes(year)">∅</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    allYears: {
      type: Array,
      default: () => [],
    },
    selectedYears: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
