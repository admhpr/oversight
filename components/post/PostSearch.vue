<template>
  <div class="w-full">
    <div class="mt-1 flex justify-between rounded-md">
      <input
        ref="searchBox"
        v-model="search"
        class="w-full"
        type="text"
        placeholder="search..."
        aria-label="Search"
        @keydown.down="down"
        @keydown.up="up"
        @keydown.enter="enter"
        @input="showSearchItems = true"
      />
      <span @click="search = ''">∅</span>
    </div>
    <div class="w-full">
      <aside
        v-if="filteredList.length > 0 && showSearchItems"
        class="z-10 flex justify-between flex-col items-start bg-white border rounded-md shadow-md mt-1"
        role="menu"
        aria-labelledby="menu-heading"
      >
        <ul class="flex flex-col w-full">
          <li
            v-for="(item, index) in filteredList"
            :key="index"
            :class="index === currentIndex ? 'bg-secondary text-white' : ''"
            class="px-2 py-3 space-x-2 hover:bg-secondary hover:text-white focus:bg-gray-600 focus:text-white focus:outline-none"
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
        this.showSearchItems = false
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
      if (this.filteredList[this.currentIndex]) {
        this.search = this.filteredList[this.currentIndex].title.toLowerCase()
        this.showSearchItems = false
      }
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
