<template>
  <div class="main">
    <Masthead url="/flowers.webp" text="Blog" />

    <div class="section">
      <div class="wrapper">
        <div class="dyn-list">
          <div class="posts">
            <Post
              v-for="result in docs.results"
              :key="result.id"
              :postData="result"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import Post from '~/components/Post.vue'
export default {
  components: { Masthead, Post },
  async asyncData({ $prismic, params, error, store }) {
    const docs = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )
    console.log(docs.results)
    if (docs) {
      if (store.state.blogPosts.length < 1) {
        await store.commit('updateBlogPosts', docs.results)
      }
      return { docs }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
.posts {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: -56px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
