<template>
  <div class="w-full">
    <div class="mt-1 flex rounded-md shadow-sm">
      <input
        ref="searchBox"
        v-model="search"
        type="text"
        placeholder="Search posts..."
        aria-label="Search"
        @input="showSearchItems = true"
      />
    </div>
    <aside
      v-if="filteredList.length > 0 && showSearchItems"
      class="absolute z-10 flex flex-col items-start w-64 bg-white border rounded-md shadow-md mt-1"
      role="menu"
      aria-labelledby="menu-heading"
    >
      <ul class="flex flex-col w-full">
        <li
          v-for="(item, index) in filteredList"
          :key="index"
          class="px-2 py-3 space-x-2 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none"
          @click="
            selectSearchItem(item)
            showSearchItems = false
          "
        >
          {{ item.name }}
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
// import './css/tailwind.css' // Development only
export default {
  name: 'VueTailwindcssTypeahead',
  directives: {
    ClickOutside,
  },
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
      selectedItem: '',
      showSearchItems: false,
      isMouseOverList: false,
      searchItemList: this.lists,
    }
  },
  computed: {
    filteredList() {
      return this.searchItemList.filter((item) => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    classProps() {
      return [...this.inputClass]
    },
  },
  created() {
    if (this.selectedData !== 0) {
      const selected = this.lists.filter((item) => {
        if (item.id === this.selectedData) {
          return true
        }
        return false
      })
      this.selectedItem = selected[0].name
      this.search = selected[0].name
    }
  },
  methods: {
    selectSearchItem(item) {
      this.search = item.name
      this.selectedItem = item.name
      this.showSearchItems = false
      this.$emit('selected', item)
    },
  },
}
</script>
