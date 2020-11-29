export { default as ArchiveList } from '../../components/ArchiveList.vue'
export { default as BlogPostList } from '../../components/BlogPostList.vue'
export { default as BlogPostPreview } from '../../components/BlogPostPreview.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Icon } from '../../components/Icon.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as PostSearch } from '../../components/PostSearch.vue'
export { default as Socials } from '../../components/Socials.vue'

export const LazyArchiveList = import('../../components/ArchiveList.vue' /* webpackChunkName: "components/ArchiveList" */).then(c => c.default || c)
export const LazyBlogPostList = import('../../components/BlogPostList.vue' /* webpackChunkName: "components/BlogPostList" */).then(c => c.default || c)
export const LazyBlogPostPreview = import('../../components/BlogPostPreview.vue' /* webpackChunkName: "components/BlogPostPreview" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyIcon = import('../../components/Icon.vue' /* webpackChunkName: "components/Icon" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar" */).then(c => c.default || c)
export const LazyPostSearch = import('../../components/PostSearch.vue' /* webpackChunkName: "components/PostSearch" */).then(c => c.default || c)
export const LazySocials = import('../../components/Socials.vue' /* webpackChunkName: "components/Socials" */).then(c => c.default || c)
