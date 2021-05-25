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
            <div
              class="img-wrapper"
              v-for="image in doc.data.images.slice(1, doc.data.images.length)"
              :key="image._image.url"
            >
              <div
                class="bg-img"
                :style="`background-image: url(${image._image.url})`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="next-project">
          <div class="left-half">
            <div class="o-label">Next project</div>
            <nuxt-link :to="`/projects/${nextProject.slugs[0]}`">
              <h1 class="project-name">
                {{ nextProject.data.project_name[0].text }}
              </h1>
            </nuxt-link>
            <nuxt-link
              :to="`/projects/${nextProject.slugs[0]}`"
              class="button text-white bg-color-4 next-button"
            >
              View more
            </nuxt-link>
          </div>
          <div class="right-half">
            <nuxt-link :to="`/projects/${nextProject.slugs[0]}`">
              <div
                class="next-bg"
                :style="`background-image: url(${nextProject.data.images[0]._image.url})`"
              ></div>
              <div class="button text-white bg-color-4 next-button">
                View more
              </div>
            </nuxt-link>
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

    const docIndex = results.indexOf(doc)
    let nextProject = results[docIndex + 1] || results[0]
    console.log({ nextProject })
    if (doc) {
      return { doc, nextProject }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style scoped lang="scss">
.next-project {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.left-half {
  padding-bottom: 1rem;
  display: grid;
  place-content: center;

  .button {
    display: none;
  }
}
.right-half {
  display: flex;
  flex-wrap: wrap;
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .button {
    margin-top: 3rem;
  }
}
.next-bg {
  height: 50vh;
  width: 75vw;
  max-width: 400px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-attachment: scroll !important;
}
.next-button {
  text-transform: capitalize;
  width: fit-content;
  color: white;

  &:hover {
    background-color: darken($color-4, 15%) !important;
  }
}
@media screen and (min-width: 768px) {
  .main {
    .right-half {
      .button {
        display: none;
      }
    }
    .left-half {
      .button {
        display: flex;
      }
    }
    .project {
      padding-left: 100px;
    }

    .first-image {
      margin-bottom: 6.25rem;
    }
  }
}

@media screen and (min-width: 1200px) {
  .main {
    .first-image {
      height: 100vh;
    }
  }
  .bg-img {
    height: 100vh !important;
  }
}
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
  color: black;
}

.first-image {
  height: 50vh;
  width: 100%;
  max-height: 1280px;
  max-width: 1700px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 5.25rem;
  margin-top: 4rem;
}

.project {
  width: 100%;
}
.flex-wrapper {
  width: 100%;
}
.image-grid {
  margin-top: 6.25rem;

  .bg-img {
    margin-bottom: 3.125rem;

    height: 50vh;
    max-height: 1280px;
    max-width: 1700px;
    /* max-height: 50vh; */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: auto;
  }
}
</style>
