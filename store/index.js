export const state = () => ({
  blogPosts: [],
  projects: [],
})

export const mutations = {
  updateBlogPosts: (state, payload) => {
    state.blogPosts = payload
  },
}

export const actions = {
  async getAllBlogPosts({ commit, $prismic, error }) {
    const posts = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )

    if (posts) {
      commit('updateBlogPosts', posts)
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
