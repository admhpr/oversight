<template>
  <div class="mt-5 p-5">
    <section class="p-5">
      <h2 class="title">::</h2>
      <PostSearch
        class="subtitle mt-2"
        :list="filteredList"
        @selected="updateSearch"
      />
      <hr class="mb-2" />
      <YearSelect
        :all-years="allYears"
        :selected-years="selectedYears"
        @yearSelected="onYearSelected"
        @yearRemoved="onYearRemoved"
      />
      <h2 class="title">∴</h2>
      <TagSelect
        :all-tags="allTags"
        :selected-tags="selectedTags"
        @tagSelected="onTagSelected"
        @tagRemoved="onTagRemoved"
      />
    </section>
    <div v-if="filteredList.length">
      <ul class="p-5 mt-5">
        <li v-for="(item, index) in filteredList" :key="`blog-post-${index}`">
          <BlogPostPreview
            v-show="index < displayRange.end"
            :desc="item.desc"
            :path="item.path"
            :published="item.date"
            :tags="item.tags"
            :title="item.title"
          />
        </li>
      </ul>

      <div
        v-if="displayRange.end <= filteredList.length"
        class="flex justify-center"
      >
        <button class="subtitle underline" type="button" @click="loadMore">
          ➾
        </button>
      </div>
    </div>
    <div v-else class="mt-10 flex justify-center">
      <iframe
        src="https://giphy.com/embed/d8lUKXD00IXSw"
        height="330"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import PostSearch from '~/components/PostSearch'
import BlogPostPreview from '~/components/BlogPostPreview'
import TagSelect from '~/components/TagSelect'
export default {
  name: 'BlogPostList',
  components: {
    BlogPostPreview,
    PostSearch,
    TagSelect,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      displayRange: {
        end: 10,
      },
      selectedTags: [],
      selectedYears: [],
      search: '',
    }
  },
  computed: {
    allTags() {
      const allTags = []
      const seenTags = {}
      this.list.forEach((item) => {
        if (typeof item.tags !== 'undefined' && item.tags.length) {
          for (const tag of item.tags) {
            if (Object.keys(seenTags).includes(tag)) {
              seenTags[tag] = seenTags[tag] + 1
              continue
            }
            const isReadyToPublish = new Date(item.date) <= new Date()
            if (isReadyToPublish) {
              seenTags[tag] = 1
            }
          }
        }
      })
      for (const [name, count] of Object.entries(seenTags)) {
        allTags.push({ name, count })
      }
      return allTags
    },
    allYears() {
      return [
        ...new Set(
          this.list
            .map((item) => new Date(item.date).getFullYear())
            .filter((year) => year <= new Date().getFullYear())
        ),
      ].sort((a, b) => b - a)
    },
    filteredList() {
      return this.list
        .filter((item) => {
          const isPost =
            item.path.includes('/blog/') || item.path.includes('/archive/')
          const isReadyToPublish = new Date(item.date) <= new Date()

          const isInSearch = this.search.length
            ? item.title.toLowerCase().includes(this.search)
            : true

          const hasTags =
            item.tags &&
            item.tags.filter((tag) => this.selectedTags.includes(tag))
              .length === this.selectedTags.length

          const hasYear = this.selectedYears.length
            ? this.selectedYears.includes(new Date(item.date).getFullYear())
            : true

          const isAsExpected = isPost && isReadyToPublish && hasYear
          const shouldPublish = this.selectedTags.length
            ? isAsExpected && hasTags
            : isAsExpected

          if (shouldPublish && isInSearch) {
            return item
          }
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date))
    },
  },
  methods: {
    loadMore() {
      this.displayRange.end += 5
    },
    onTagSelected(tag) {
      this.selectedTags.push(tag)
    },
    onTagRemoved(tag) {
      this.selectedTags = this.selectedTags.filter((t) => t !== tag)
    },
    onYearSelected(year) {
      this.selectedYears.push(year)
    },
    onYearRemoved(year) {
      this.selectedYears = this.selectedYears.filter((y) => y !== year)
    },
    updateSearch(search) {
      this.search = search
    },
  },
}
</script>

<style lang="scss" scoped></style>
