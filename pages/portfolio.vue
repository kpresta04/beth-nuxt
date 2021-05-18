<template>
  <div class="main">
    <div class="section">
      <div class="project-wrapper">
        <div class="project-grid">
          <div class="project" v-for="project in docs" :key="project.id">
            <img
              :src="project.data.images[0]._image.url"
              :alt="project.data.images[0]._image.alt || 'project image'"
            />
          </div>
        </div>
      </div>
    </div>
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
      console.log(docs.results)
      return { docs: docs.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
.project-wrapper {
  width: 100%;
  max-width: 1800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.project {
  padding: 0 50px;
  max-width: 800px;
}
</style>
