<template>
  <section
    :style="bgStyle"
    :class="`masthead`"
    role="img"
    aria-label="Image Description"
  >
    <div :class="`bg-cover bg-color-${bgColor}`"></div>
    <div class="wrapper title-container">
      <h1 class="bottom-up" :style="textAlign">{{ text }}</h1>
      <div
        class="divider expand"
        style="background-color: white; margin: 0 auto"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '/contact.webp',
    },
    text: {
      type: String,
      default: 'Contact',
    },
    align: {
      type: String,
      default: 'center',
    },
    color: {
      type: String,
      default: 'white',
    },
    bgColor: {
      type: String,
      default: '1',
    },
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.url})`
    },
    textAlign() {
      return `text-align: ${this.align}; color: ${this.color}`
    },
  },
}
</script>

<style lang="scss" scoped>
.title-container {
  position: absolute !important;
  z-index: 3;
}
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 100%;
  height: 40vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-attachment: scroll !important;
  z-index: 1;
}
.bg-cover {
  z-index: 2;
  background-color: black;
  height: 100%;
  width: 100vw;
  /* background-image: linear-gradient(
    8deg,
    rgba(52, 16, 177, 0.9),
    rgba(106, 60, 204, 0.9)
  ); */
  opacity: 0.8;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 40px;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 28px;
}
</style>
