import { codePointAt } from 'core-js/core/string'

export default {
  target: 'static',
  head: {
    title: 'oversight',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'desc', name: 'desc', content: '' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'adam.harpur.io',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://adam.harpur.io',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/assets/logo.png' || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/axios.js', '~/plugins/posts.js'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  axios: {},
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  publicRuntimeConfig: {
    apiKey: process.env.DEV_TO_API_KEY,
  },
  styleResources: {
    scss: ['~/styles/main.scss'],
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      if (document.slug === 'on-vue') {
        // console.log(document)
        const { children } = document.body
        for (const [pos, el] of children.entries()) {
          // console.log(JSON.stringify(el))
          if (el.children) {
            const codeblock = el.children.find(({ tag }) => tag === 'pre')
            if (
              codeblock &&
              codeblock.props.className.includes(`language-text`)
            ) {
              const mermaid = require('headless-mermaid')
              const graphValues = codeblock.children[0].children[0].value
              // console.log(JSON.parse(JSON.stringify(graphValues), null, 2))
              console.log(graphValues)
              const svg = await mermaid.execute(`${graphValues}`, {
                theme: 'neutral',
              })
              console.log(svg)
              const ast = await database.markdown.toJSON(svg)

              const svgAst = ast.body.children
              console.log('SVG', svgAst)
              // const diagram = svgAst[svgAst.length - 1]
              // console.log(diagram)
              // // eslint-disable-next-line
              // const [text, ...nodes] = diagram.children
              // const cleanDiagram = { ...diagram, children: nodes }
              document.body.children[pos] = {
                type: 'element',
                tag: 'p',
                props: {},
                children: svgAst,
              }
            }
          }
        }
        // console.log(JSON.parse(JSON.stringify(document.body.children), null, 2))
      }
    },
  },
}
