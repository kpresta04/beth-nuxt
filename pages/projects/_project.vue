<template>
  <div class="main">
    <div class="section">
      <div class="o-label">Project</div>
      <h1 class="project-name">{{ doc.data.project_name[0].text }}</h1>

      <div class="text-wrapper">
        <prismic-rich-text :field="doc.data.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error, store }) {
    const { results } = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'project')
    )
    if (store.state.projects.length < 1) {
      await store.commit('updateProjects', results)
    }
    const doc = await results.find(
      (result) => result.slugs[0] === params.project
    )

    let otherPost = store.state.projects
      .filter((proj) => proj.slugs[0] !== doc.slugs[0])
      .slice(0, 1)

    console.log(doc)
    if (doc) {
      return { doc, otherPost }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style scoped lang="scss">
.o-label {
  text-transform: uppercase;
  font-size: 13px;
  font-size: 0.8125rem;
  letter-spacing: 1px;
  letter-spacing: 0.0625rem;
  color: $grey2;
}

.text-wrapper {
  word-break: break-word;
  max-width: 480px;
}

.project-name {
  text-transform: capitalize;
}
</style>
