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
        <div class="post-top-author">
          <div class="post-top-avatar"></div>
          <div class="post-top-author-name">Bethany Marie</div>
          <nuxt-link to="/about" class="post-top-author-link"
            >About Author</nuxt-link
          >
        </div>
        <h6>
          <span class="post-info">
            {{ dateString }}
          </span>
          in
          <span
            :class="
              doc.tags[0] === 'Inspiration'
                ? `color-1 post-top-category`
                : doc.tags[0] === 'Design'
                ? `color-2 post-top-category`
                : doc.tags[0] === 'Tutorial'
                ? `color-3 post-top-category`
                : doc.tags[0] === 'Marketing'
                ? `color-4 post-top-category`
                : `color-1 post-top-category`
            "
            >{{ doc.tags[0] }}</span
          >
        </h6>
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
@media screen and (min-width: 1024px) {
  .wrap {
    max-width: 87%;
  }
}
@media screen and (min-width: 1200px) {
  .blog-post-wrapper {
    .post-top-author {
      position: absolute;
      z-index: 1;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 25%;
      margin-left: -33%;
      padding-top: 24px;
      padding-right: 40px;
      padding-bottom: 40px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
      border-right: 1px solid #e9e9e9;
      border-bottom: none;
      color: #151515;
      font-size: 11px;
      line-height: 16px;
      font-weight: 700;
      text-align: right;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .post-top-avatar {
      width: 56px;
      height: 56px;
      margin-bottom: 20px;
      border-radius: 50%;
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .post-top-author-link {
      margin-top: 8px;
    }
  }
}
.wrap {
  background-color: white;
  display: flex;
  justify-content: center;
  margin-top: -228px;
  position: relative;
}
.blog-post-wrapper {
  position: relative;
  margin: 0 auto;
  max-width: 660px;
  padding: 48px 10px;
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
.post-top-category {
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 10px;
}
.post-top-author {
  position: relative;
  width: auto;
  margin-right: -16px;
  margin-left: -16px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  padding-bottom: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  border-right-style: none;
  text-align: left;
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;

  letter-spacing: 1px;
  text-transform: uppercase;
}
.post-top-avatar {
  width: 40px;
  height: 40px;
  margin-right: 16px;
  margin-bottom: 0px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-image: url('/placeholder.webp');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.post-top-author-name {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.post-top-author-link {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-top: -1px;
  border-bottom: 1px dashed #888;
  -webkit-transition: color 150ms ease, border-color 150ms ease;
  transition: color 150ms ease, border-color 150ms ease;
  color: #888;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  text-decoration: none;
  text-transform: none;
}
</style>
