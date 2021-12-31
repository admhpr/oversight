<template>
  <img :src="source" :alt="alt" :title="title" />
</template>

<script>
const path = require('path')

const requireFromContent = (contentPath) => {
  let result
  const ext = path.extname(contentPath)
  const name = path.basename(contentPath, ext)
  const dir = path.dirname(contentPath)
  // IMPORTANT
  // Every fixed string parts of the following require calls, like folder name, path separators
  // and file extensions, are crucial for narrowing down the required module path before the
  // variable part of the string is determined, see here:
  // https://webpack.js.org/guides/dependency-management/#require-with-expression
  switch (ext) {
    case '.svg':
      result = require(`~/content/${path.join(dir, name)}.svg`)
      break
    case '.png':
      result = require(`~/content/${path.join(dir, name)}.png`)
      break
    case '.jpg':
      result = require(`~/content/${path.join(dir, name)}.jpg`)
      break
    case '.jpeg':
      result = require(`~/content/${path.join(dir, name)}.jpeg`)
      break
    case '.gif':
      result = require(`~/content/${path.join(dir, name)}.gif`)
      break
    default:
      result = null
  }
  return result
}

const requireFromAssets = (assetsPath) => {
  let result
  const ext = path.extname(assetsPath)
  const name = path.basename(assetsPath, ext)
  const dir = path.dirname(assetsPath)
  // IMPORTANT
  // Every fixed string parts of the following require calls, like folder name, path separators
  // and file extensions, are crucial for narrowing down the required module path before the
  // variable part of the string is determined, see here:
  // https://webpack.js.org/guides/dependency-management/#require-with-expression
  switch (ext) {
    case '.svg':
      result = require(`~/assets/${path.join(dir, name)}.svg`)
      break
    case '.png':
      result = require(`~/assets/${path.join(dir, name)}.png`)
      break
    case '.jpg':
      result = require(`~/assets/${path.join(dir, name)}.jpg`)
      break
    case '.jpeg':
      result = require(`~/assets/${path.join(dir, name)}.jpeg`)
      break
    case '.gif':
      result = require(`~/assets/${path.join(dir, name)}.gif`)
      break
    default:
      result = null
  }
  return result
}

export default {
  name: 'ContentImg',
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: undefined },
    title: { type: String, default: undefined },
  },
  computed: {
    source() {
      // './' is meant be used in '.md' files to reference image files located in same the
      // folder with the '.md' file.

      if (this.src.startsWith('./')) {
        // document.dir is available if inside nuxt-contet: <nuxt-content :document="document"></nuxt-content>
        // console.log(this.$parent.document)
        if (this.$parent.document && this.$parent.document.dir) {
          let dir = this.$parent.document.dir
          if (dir.startsWith(path.sep)) dir = dir.replace(path.sep, '')
          return requireFromContent(path.join(dir, this.src))
        } else {
          throw new Error(`'./' should be used only in '.md' files!`)
        }
      } else if (
        this.src.startsWith('~/content/') ||
        this.src.startsWith('@/content/')
      ) {
        return requireFromContent(this.src.slice(10))
      } else if (
        this.src.startsWith('~/assets/') ||
        this.src.startsWith('@/assets/')
      ) {
        return requireFromAssets(this.src.slice(9))
      } else {
        return this.src
      }
    },
  },
}
</script>

<style></style>
