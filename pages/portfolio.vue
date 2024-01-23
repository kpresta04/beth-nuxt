<template>
  <div class="main">
    <masthead text="Portfolio" bgColor="4" url="/sj2.webp" />
    <!-- <div class="page-title">
      <h1 class="bottom-up">Portfolio</h1>
      <div class="divider"></div>
    </div> -->

    <div class="project-wrapper">
      <div
        v-observe-visibility="{
          callback: changeOpacity,
          once: true,
          throttle: 400,
        }"
        class="project"
        v-for="project in docs"
        :key="project.id"
        :id="`proj-${project.id}`"
        @mouseenter="hoverMe"
        @mouseleave="hoverEnd"
      >
        <nuxt-link class="project-link" :to="`/projects/${project.slugs[0]}`">
          <div
            class="hover-content"
            style="
              transform: translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
              opacity: 0;
            "
          >
            <div class="button">
              <div>View More</div>
            </div>
          </div>
          <div class="hover-bg" style="opacity: 0"></div>
          <div
            class="bg"
            :style="`background-image: url(${project.data.images[0]._image.url});`"
          >
            <h4 class="project-title">
              {{ project.data.project_name[0].text }}
            </h4>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import { changeOpacity } from '~/utils/vis'
export default {
  components: { Masthead },
  async asyncData({ $prismic, params, error, store }) {
    const docs = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'project')
    )
    if (docs) {
      if (store.state.projects.length < 1) {
        await store.commit('updateProjects', docs.results)
      }
      return { docs: docs.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  // mounted() {
  //   const projects = [...document.querySelectorAll('.project')]
  //   projects.forEach((proj) => {
  //     proj.addEventListener('touchstart', this.blockClickEvent)
  //   })
  // },
  // beforeDestroy() {
  //   const projects = [...document.querySelectorAll('.project')]

  //   projects.forEach((proj) => {
  //     proj.removeEventListener('touchstart', this.blockClickEvent)
  //   })

  methods: {
    changeOpacity,
    blockClickEvent: function (e) {
      e.preventDefault()
      e.target.click()
    },
    hoverMe: function (e) {
      //hover content
      e.target.children[0].children[0].style =
        'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;opacity: 1;'
      //   //hover background
      e.target.children[0].children[1].style = 'opacity: 1;'
      //   //bg-img
      //   e.target.children[0].children[2].style = `background-image: url(${this.postData.data.header_image.url});
      // transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      // transform-style: preserve-3d;`
    },

    hoverEnd: function (e) {
      e.target.children[0].children[0].style =
        'transform: translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1)rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;opacity: 0;'
      e.target.children[0].children[1].style = 'opacity: 0;'
      //   e.target.children[0].children[2].style = `background-image: url(${this.postData.data.header_image.url});
      // transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      // transform-style: preserve-3d;`
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and(min-width:768px) {
  .main {
    .project-wrapper {
      margin-top: 9rem;
    }
    .hover-content {
      display: flex;
    }
  }
}
@media screen and(min-width:1024px) {
  .main {
    .project {
      width: 50%;
    }
  }
}
@media screen and(min-width:1200px) {
  .main {
    .project-wrapper {
      max-width: 1800px;
    }

    .project {
      height: 600px;
    }
  }
}
.project-wrapper {
  margin: 72px auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding: 0 1rem;
  position: relative;
}
.project {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
  height: 55vh;
  margin: 0 0 20px;
  opacity: 0;
  transition: all 400ms ease;
}

.project-link {
  position: relative;
  height: 100%;
  width: 100%;
}

.project-title {
  text-transform: uppercase;
  z-index: 54;

  letter-spacing: 0.2rem;
  background-color: #000000a6;

  position: absolute;
  color: #fff;
  width: calc(100% - 2rem);

  left: 1rem;

  bottom: 2rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

.hover-content {
  display: none;
}

.bg {
  height: 100%;
  width: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: opacity 0.4s cubic-bezier(0.4, 0, 0, 1);
  opacity: 1;
  /* &:hover {
    opacity: 0.85;
  } */
}

.bg::before {
  content: '';
  position: absolute;
  background: linear-gradient(0deg, #00000038 30%, #ffffff44 100%);
  width: 100%;
  height: 100%;
  z-index: 0;
  left: 0;
  top: 0;
}

.page-title {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 5rem;

  h1 {
    width: 100%;
  }
}
.hover-bg {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 5;
  transition: all 300ms ease;

  background-color: rgba(21, 21, 21, 0.4);
}
.hover-content {
  .button {
    background-color: white;
    &:hover {
      color: white;
      background-color: $color-4;
    }
  }
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 6;
  padding: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 300ms ease;
}
</style>
