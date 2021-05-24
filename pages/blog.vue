<template>
  <div class="main">
    <Masthead url="/flowers.webp" text="Blog" bgColor="4" />

    <div class="section">
      <div class="wrapper">
        <div class="tabs-menu">
          <div
            @click="updateSelection('all')"
            :class="selectedTag === 'all' ? 'tab-link w--current' : 'tab-link'"
          >
            All Posts
          </div>
          <div class="w-dyn-list">
            <div role="list" class="blog-categories w-dyn-items">
              <div role="listitem" class="w-dyn-item">
                <div
                  @click="updateSelection('Design')"
                  :class="
                    selectedTag === 'Design'
                      ? 'tab-link w--current'
                      : 'tab-link'
                  "
                >
                  Design
                </div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div
                  @click="updateSelection('Marketing')"
                  :class="
                    selectedTag === 'Marketing'
                      ? 'tab-link w--current'
                      : 'tab-link'
                  "
                >
                  Marketing
                </div>
              </div>

              <div role="listitem" class="w-dyn-item">
                <div
                  @click="updateSelection('Tutorial')"
                  :class="
                    selectedTag === 'Tutorial'
                      ? 'tab-link w--current'
                      : 'tab-link'
                  "
                >
                  Tutorial
                </div>
              </div>
              <div role="listitem" class="w-dyn-item">
                <div
                  @click="updateSelection('Inspiration')"
                  :class="
                    selectedTag === 'Inspiration'
                      ? 'tab-link w--current'
                      : 'tab-link'
                  "
                >
                  Inspiration
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dyn-list">
          <div class="posts">
            <Post v-for="result in docs" :key="result.id" :postData="result" />
            <h4 v-if="docs.length < 1">No posts found for this tag!</h4>
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
  data() {
    return {
      selectedTag: 'all',
    }
  },
  methods: {
    updateSelection: function (value) {
      this.selectedTag = value
      if (value === 'all') {
        this.docs = this.$store.state.blogPosts
        return
      }

      const filtered = this.$store.state.blogPosts.filter(
        (post) => post.tags[0] === value
      )
      this.docs = filtered
    },
  },
  async asyncData({ $prismic, params, error, store }) {
    const docs = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )
    if (docs) {
      if (store.state.blogPosts.length < 1) {
        await store.commit('updateBlogPosts', docs.results)
      }
      // console.log(docs.results)
      return { docs: docs.results }
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
  justify-content: center;
  h4 {
    text-align: center;
    width: 100%;
  }
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
  flex-wrap: wrap;
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

  &:hover:not(.w--current) {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
