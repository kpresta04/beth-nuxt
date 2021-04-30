<template>
  <div class="main hero">
    <div class="left-hero">
      <div class="hero-info">
        <div class="title">Bethany Marie</div>
        <h1>
          <strong><em>Simple</em></strong> & Stylish Designs
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut beatae
          alias a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt, rem.
        </p>
        <nuxt-link class="button white-button" to="/portfolio"
          >View my work</nuxt-link
        >
      </div>
    </div>
    <div class="right-hero">l</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.hero {
  width: 100vw;
  height: 100vh;
  max-height: 1200px;
  margin-top: -88px;
  background-color: $color-4;
  color: white;
  z-index: 1;
  display: flex;
  flex-wrap: wrap-reverse;
}

.left-hero,
.right-hero {
  width: 50%;
  height: 100%;
}
.right-hero {
  background-color: black;
  z-index: 42;
}
.left-hero {
  display: grid;
  place-items: center;
}
.hero-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 75%;
}
.title {
  width: 100%;
  margin-bottom: 12px;
  font-size: 9px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.white-button {
  background-color: white;
  text-transform: capitalize;
}
h1 {
  font-weight: 400;
  margin-bottom: 16px;
  margin-top: 0;
}
button {
  background-color: $color-1;
  color: $c1-complement;
  padding: 1rem;
}
</style>
