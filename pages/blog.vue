<template>
  <div class="main">
    <Masthead url="/flowers.webp" text="Blog" />

    <div class="section">
      <div class="wrapper">
        <div class="tabs-menu">
          <nuxt-link
            to="#"
            aria-current="page"
            class="tab-link w--current no-ul"
            >All Posts</nuxt-link
          >
          <div class="w-dyn-list">
            <div role="list" class="blog-categories w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <nuxt-link to="/blog/category/design" class="tab-link"
                  >Design</nuxt-link
                >
              </div>
              <div role="listitem" class="w-dyn-item">
                <a href="/blog-categories/marketing" class="tab-link"
                  >Marketing</a
                >
              </div>
              <div role="listitem" class="w-dyn-item">
                <a href="/blog-categories/productivity" class="tab-link"
                  >Productivity</a
                >
              </div>
              <div role="listitem" class="w-dyn-item">
                <a href="/blog-categories/tutorial" class="tab-link"
                  >Tutorial</a
                >
              </div>
            </div>
          </div>
        </div>
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
.tabs-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 80px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.tab-link.w--current {
  background-color: transparent;
  color: $color-4;
  text-decoration: none;
}
.blog-categories {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.tab-link {
  display: inline-block;
  padding: 14px 20px;
  background-color: #fff;
  color: #151515;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-decoration: none;

  &:hover:not(.no-ul) {
    text-decoration: underline;
  }
}
</style>
