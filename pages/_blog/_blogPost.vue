<template>
  <div class="main">
    <div class="section">
      <div class="wrapper">
        <h1>{{ doc.data.title[0].text }}</h1>
        <prismic-rich-text :field="doc.data.content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const { results } = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )
    const doc = await results.find(
      (result) => result.slugs[0] === params.blogPost
    )
    // console.log(doc)

    // console.log(params)
    if (doc) {
      return { doc }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped></style>
