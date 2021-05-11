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
.link-wrap {
  width: 100%;
}
.post {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 33.33%;
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
}
</style>
