function publishByDateFilter(posts) {
  return posts
    .filter((post) => new Date(post.date) <= new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export default async function ({ app }, inject) {
  const blogPosts = await app.$content('blog').fetch()
  const archivedPosts = await app.$content('archive').fetch()
  const notesPosts = await app.$content('notes').fetch()

  inject('archivedPosts', publishByDateFilter(archivedPosts))
  inject('blogPosts', publishByDateFilter(blogPosts))
  inject('notesPosts', publishByDateFilter(notesPosts))
}
