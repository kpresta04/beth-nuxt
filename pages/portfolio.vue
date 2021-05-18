<template>
  <div class="main">
    <div class="section"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const docs = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'project')
    )
    if (docs) {
      if (store.state.projects.length < 1) {
        await store.commit('updateProjects', docs.results)
      }
      // console.log(docs.results)
      return { docs: docs.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style
  lang="sc
Mastheadss"
  scoped
></style>
