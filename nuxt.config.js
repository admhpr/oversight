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
}
