<template>
  <div class="w-full">
    <div class="mt-1 flex justify-between rounded-md">
      <input
        ref="searchBox"
        v-model="search"
        type="text"
        placeholder="Search posts..."
        aria-label="Search"
        @keydown.down="down"
        @keydown.up="up"
        @keydown.enter="enter"
        @input="showSearchItems = true"
      />
      <span @click="search = ''">∅</span>
    </div>
    <aside
      v-if="filteredList.length > 0 && showSearchItems"
      class="absolute z-10 flex flex-col items-start bg-white border rounded-md shadow-md mt-1"
      role="menu"
      aria-labelledby="menu-heading"
    >
      <ul class="flex flex-col w-full">
        <li
          v-for="(item, index) in filteredList"
          :key="index"
          :class="index === currentIndex ? 'bg-blue-600' : ''"
          class="px-2 py-3 space-x-2 hover:bg-blue-600 hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none"
          @click="
            selectSearchItem(item)
            showSearchItems = false
          "
        >
          {{ item.title.toLowerCase() }}
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'PostSearch',
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Search here...',
    },
  },
  data() {
    return {
      search: '',
      currentIndex: 0,
      showSearchItems: false,
    }
  },
  computed: {
    filteredList() {
      return this.list
    },
  },
  watch: {
    search(v) {
      this.$emit('selected', this.search)
      if (this.search === '') {
        this.currentIndex = 0
      }
    },
  },
  methods: {
    selectSearchItem(item) {
      this.search = item.title.toLowerCase()
      this.showSearchItems = false
      this.$emit('selected', this.search)
    },
    enter() {
      this.search = this.filteredList[this.currentIndex].title.toLowerCase()
    },
    up() {
      if (this.currentIndex) {
        this.currentIndex = this.currentIndex - 1
      }
    },
    down() {
      if (this.currentIndex + 1 < this.filteredList.length - 1) {
        this.currentIndex = this.currentIndex + 1
        return
      }
      this.currentIndex = 0
    },
  },
}
</script>
