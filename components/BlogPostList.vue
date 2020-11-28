<template>
  <div class="mt-5">
    <h2 class="title">::</h2>
    <div class="flex flex-wrap">
      <a
        v-for="{ name, count } in allTags"
        :key="name"
        :href="'#' + name"
        class="underline tag mr-5"
        @click="
          selectedTag === name ? (selectedTag = '') : (selectedTag = name)
        "
        ><span> #{{ name }} </span>
        <span v-if="selectedTag === name">∅</span>
        <span
          v-else
          class="bg-gray-700 text-gray-100 rounded-full bg-white px-2"
          >{{ count }}</span
        >
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
      const seenTags = {}
      this.list.map((item) => {
        if (typeof item.tags !== 'undefined' && item.tags.length) {
          for (const tag of item.tags) {
            if (Object.keys(seenTags).includes(tag)) {
              seenTags[tag] = seenTags[tag] + 1
              continue
            }
            seenTags[tag] = 1
          }
        }
      })
      for (const [name, count] of Object.entries(seenTags)) {
        allTags.push({ name, count })
      }
      return allTags
    },
    filteredList() {
      return this.list
        .filter((item) => {
          const isBlogPost =
            item.path.includes('/blog/') || item.path.includes('/archived/')
          const isReadyToPublish = new Date(item.date) <= new Date()

          if (!isReadyToPublish) {
            console.log(item)
          }

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
