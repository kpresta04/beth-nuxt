<template>
  <div class="main">
    <!-- <Masthead :url="doc.data.header_image.url" text="" /> -->
    <div
      class="header-img"
      :style="`background-image: url(${doc.data.header_image.url});
      transform: translate3d(0px, -0.002%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      `"
    >
      &nbsp;
    </div>
    <div class="wrap">
      <div class="blog-post-wrapper">
        <h6 class="post-info">{{ dateString }}</h6>
        <h1>{{ doc.data.title[0].text }}</h1>
        <prismic-rich-text :field="doc.data.content" />
      </div>
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

  methods: {
    transformHeader: function (e) {
      const headerImg = document.querySelector('.header-img')

      const scrollPct = e.target.scrollingElement.scrollTop * 0.015

      if (headerImg && scrollPct < 20) {
        headerImg.style.transform = `translate3d(0px, ${
          scrollPct + '%'
        }, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
      }
    },
  },

  mounted() {
    document.addEventListener('scroll', this.transformHeader)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.transformHeader)
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: white;
  max-width: 85%;
  display: flex;
  justify-content: center;
  margin-top: -228px;
  position: relative;
}
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

.header-img {
  width: 100%;
  height: 100vh;
  margin-top: -88px;
  background-position: 50% 100%, 0 0, 50% 50%;
  /* background-size: 0 74px, auto, cover; */
  /* background-repeat: repeat-x, repeat, no-repeat; */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll, fixed;
  transform-style: preserve-3d;
}
</style>
