<template>
  <div class="main">
    <Masthead :url="doc.data.header_image.url" text="" />

    <div class="blog-post-wrapper">
      <h6 class="post-info">{{ dateString }}</h6>
      <h1>{{ doc.data.title[0].text }}</h1>
      <prismic-rich-text :field="doc.data.content" />
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
export default {
  components: { Masthead },
  async asyncData({ $prismic, params, error }) {
    const { results } = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )
    const doc = await results.find(
      (result) => result.slugs[0] === params.blogPost
    )

    const date = new Date(doc.first_publication_date)
    const dateString = `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getDate()}, ${date.getFullYear()}`

    // console.log(params)
    if (doc) {
      return { doc, dateString }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
.blog-post-wrapper {
  margin: 0 auto;
  max-width: 660px;
  padding: 0 10px;
  padding-top: 48px;
}

.post-info {
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
