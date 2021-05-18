<template>
  <div class="main">
    <div class="section">
      <div class="project">
        <div class="flex-wrapper">
          <div class="o-label">Project</div>
          <h1 class="project-name">{{ doc.data.project_name[0].text }}</h1>
          <div
            class="first-image"
            :style="`background-image:url(${doc.data.images[0]._image.url});`"
          ></div>

          <div class="text-wrapper">
            <prismic-rich-text :field="doc.data.description" />
          </div>

          <div class="image-grid" v-if="doc.data.images.length > 1">
            <prismic-image
              v-for="image in doc.data.images.slice(1, doc.data.images.length)"
              :field="image._image"
              :key="image._image.url"
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

.first-image {
  height: 100vh;
  width: 100%;
  max-height: 1100px;
  max-width: 1400px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 6.25rem;
  margin-top: 4rem;
}

.project {
  width: 100%;
  padding-left: 100px;
}
.flex-wrapper {
  width: 100%;
}
.image-grid {
  margin-top: 6.25rem;

  img {
    margin-bottom: 3.125rem;

    height: 100%;
    max-height: 100vh;
    width: auto;
  }
}
</style>