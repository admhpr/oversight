// see: https://blog.rizalrenaldi.com/blog/nuxt-content-image-inside-markdown/
const visit = require('unist-util-visit')
module.exports = function nuxtContentImages() {
  return function transformer(tree, file) {
    visit(tree, 'element', visitor)

    function visitor(node) {
      if (node.tagName === 'img') {
        node.tagName = 'content-img'
      }
    }
  }
}
