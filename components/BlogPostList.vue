<template>
  <div class="mt-5">
    <h2 class="title">::</h2>
    <div class="flex">
      <a
        v-for="tag in allTags"
        :key="tag"
        href="#"
        class="underline tag mr-5"
        @click="selectedTag === tag ? (selectedTag = '') : (selectedTag = tag)"
        ><span> #{{ tag }}</span>
        <span v-if="selectedTag === tag">∅</span>
      </a>
    </div>
    <hr />
    <ul class="mt-5">
      <li v-for="(item, index) in filteredList" :key="`blog-post-${index}`">
        <BlogPostPreview
          v-show="index < displayRange.end"
          :desc="item.desc"
          :path="item.path"
          :published="item.date"
          :tags="item.tags"
          :title="item.title"
          @updateSelectedTag="updateSelectedTag"
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
</template>

<script>
import BlogPostPreview from '~/components/BlogPostPreview'
export default {
  name: 'BlogPostList',
  components: {
    BlogPostPreview,
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
      selectedTag: '',
    }
  },
  computed: {
    allTags() {
      const allTags = []
      this.list.map((item) => {
        if (item.tags.length) {
          for (const tag of item.tags) {
            allTags.push(tag)
          }
        }
      })
      return [...new Set(allTags)]
    },
    filteredList() {
      return this.list
        .filter((item) => {
          const isBlogPost = item.path.includes('/blog/')
          const isReadyToPublish = new Date(item.date) <= new Date()

          const hasTags = item.tags && item.tags.includes(this.selectedTag)
          const shouldPublish = this.selectedTag
            ? isBlogPost && isReadyToPublish && hasTags
            : isBlogPost && isReadyToPublish
          if (shouldPublish) {
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
    updateSelectedTag(tag) {
      this.selectedTag = tag
    },
  },
}
</script>

<style lang="scss" scoped></style>
