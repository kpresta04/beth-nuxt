<template>
  <section
    class="masthead"
    role="img"
    aria-label="Image Description"
    :style="bgStyle"
  >
    <div class="wrapper">
      <h1 class="bottom-up" :style="textAlign">{{ text }}</h1>
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
  },
  computed: {
    bgStyle() {
      return `background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 61%, rgba(0, 0, 0, 0.65) 100%), url(${this.url}) no-repeat center center scroll;`
    },
    textAlign() {
      return `text-align: ${this.align}; color: ${this.color}`
    },
  },
}
</script>

<style lang="scss" scoped>
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
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 40px;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 28px;
}
</style>
