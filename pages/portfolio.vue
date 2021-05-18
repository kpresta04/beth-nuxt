<template>
  <div class="main">
    <div class="project-wrapper">
      <div class="project" v-for="project in docs" :key="project.id">
        <nuxt-link class="project-link" :to="`/projects/${project.slugs[0]}`">
          <h4 class="project-title">
            {{ project.data.project_name[0].text }}
          </h4>
          <div
            class="bg"
            :style="`background-image: url(${project.data.images[0]._image.url});`"
          ></div>
        </nuxt-link>
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
@media screen and(min-width:1200px) {
  .main {
    .project-wrapper {
      max-width: 1800px;
    }
  }
}
.project-wrapper {
  margin: 128px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding: 0 1rem;
}
.project {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 50%;
  height: 600px;
  margin: 0 0 20px;
}

.project-link {
  position: relative;
  height: 100%;
  width: 100%;
}

.project-title {
  text-transform: uppercase;
  position: absolute;
  bottom: 100px;
  left: 0;
  color: white;
  letter-spacing: 0.5rem;
}

.bg {
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.bg::before {
  content: '';
  position: absolute;
  background: linear-gradient(0deg, #00000038 30%, #ffffff44 100%);
  width: 100%;
  height: 100%;
  z-index: 3;
  left: 0;
  top: 0;
}
</style>
