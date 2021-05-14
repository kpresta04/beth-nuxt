<template>
  <div class="post">
    <div class="card">
      <div @mouseenter="hoverMe" @mouseleave="hoverEnd" class="link-wrap">
        <nuxt-link class="card-preview" :to="`/blog/${postData.slugs[0]}`">
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
              <div>Read More</div>
            </div>
          </div>
          <div class="hover-background" style="opacity: 0"></div>
          <div
            class="bg-img"
            :style="`background-image: url(${postData.data.header_image.url});
    transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;`"
          ></div>
        </nuxt-link>
      </div>
      <div class="post-card-info">
        <div style="color: #9689ce" class="post-card-category">
          {{ postData.tags[0] }}
        </div>
        <nuxt-link
          :to="`/blog/${postData.slugs[0]}`"
          class="link-dark w-inline-block"
          ><h4 class="capitalize">
            {{ postData.data.title[0].text }}
          </h4></nuxt-link
        >
        <div class="post-card-decription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          excepturi ad aperiam sint corrupti ea distinctio ipsum ipsam dolorum
          tenetur voluptate, eos, similique debitis ipsa.
        </div>
        <div class="post-card-bottom">
          <div>
            {{
              new Date(postData.first_publication_date).toLocaleString(
                'default',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverOn: false,
    }
  },
  props: {
    postData: {
      type: Object,
      default: {},
    },
  },
  methods: {
    hoverMe: function (e) {
      //hover content
      e.target.children[0].children[0].style =
        'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;opacity: 1;'
      //hover background
      e.target.children[0].children[1].style = 'opacity: 1;'
      //bg-img
      e.target.children[0].children[2].style = `background-image: url(${this.postData.data.header_image.url});
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;`
    },

    hoverEnd: function (e) {
      e.target.children[0].children[0].style =
        'transform: translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 1)rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);transform-style: preserve-3d;opacity: 0;'
      e.target.children[0].children[1].style = 'opacity: 0;'

      e.target.children[0].children[2].style = `background-image: url(${this.postData.data.header_image.url});
    transform: translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;`
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .post {
    width: 80% !important;
  }
}
@media screen and (min-width: 1024px) {
  .post {
    width: 33.33% !important;
  }
}
.link-wrap {
  width: 100%;
}
.post {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}
.card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  position: relative;

  .card-preview {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 248px;
    margin-bottom: 20px;
    padding: 16px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #e9e9e9;
    text-decoration: none;
  }
  .hover-content {
    .button {
      background-color: white;
      &:hover {
        color: white;
        background-color: $color-1;
      }
    }
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 3;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
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
  .hover-background {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2;
    background-color: rgba(21, 21, 21, 0.2);
  }
  .bg-img {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 500ms ease-in-out;
  }
  .post-card-category {
    display: inline-block;
    margin-bottom: 8px;
    padding: 4px;
    color: #151515;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 3px;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
  }
  .link-dark {
    &:hover {
      text-decoration: underline;
    }
  }
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
  h4 {
    margin-top: 0px;
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
  }
  .post-card-decription {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #888;
  }
  .post-card-bottom {
    /* position: absolute; */
    left: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-top: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;
  }
}
</style>
