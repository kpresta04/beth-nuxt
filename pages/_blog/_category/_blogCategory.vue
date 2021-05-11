<template>
  <div class="main"></div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    console.log(params)
    // const { results } = await $prismic.api.query(
    //   $prismic.predicates.at('document.type', 'blog_post')
    // )
    // const doc = await results.find(
    //   (result) => result.slugs[0] === params.blogPost
    // )

    // const date = new Date(doc.first_publication_date)
    // const dateString = `${date.toLocaleString('default', {
    //   month: 'long',
    // })} ${date.getDate()}, ${date.getFullYear()}`

    // // console.log(params)
    // if (doc) {
    //   return { doc, dateString }
    // } else {
    //   error({ statusCode: 404, message: 'Page not found' })
    // }
  },
}
</script>

<style lang="scss" scoped></style>
