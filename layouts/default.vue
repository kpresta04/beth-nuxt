<template>
  <div>
    <header>
      <div class="nav-wrapper">
        <div class="brand-info">
          <nuxt-link to="/">
            <img src="sc.svg" alt="logo" />
            <div class="brand-title">Bethany Marie</div>
            <div class="brand-descr">Design</div>
          </nuxt-link>
        </div>
        <nav>
          <nuxt-link to="/portfolio">portfolio</nuxt-link>
          <nuxt-link to="/blog">blog</nuxt-link>
          <nuxt-link to="/about">about</nuxt-link>
          <nuxt-link to="/contact">contact</nuxt-link>
        </nav>
      </div>
    </header>
    <Nuxt />
    <section>
      <div class="wrapper sidepaddings">
        <footer>
          <p>hi</p>
        </footer>
        <div class="footer-bottom">
          <div>
            <span class="white">Bethany Marie Design</span> &#169; {{ year }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      year: 2021,
    }
  },
  created() {
    const date = new Date()
    this.year = date.getFullYear()
  },
})
</script>

<style lang="scss">
header {
  width: 100%;
  height: 88px;
  max-width: $max-div-width;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-wrapper {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
a {
  display: flex;
  align-items: center;
  color: $dark;
}
nav {
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  a {
    text-transform: capitalize;
    font-size: 14px;
    margin: 0 2rem;
  }
  a:hover {
    text-decoration: underline;
  }
}
.brand-info {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  height: 100%;
  padding: 8px 16px 8px 15px;

  img {
    max-width: 32px;
    vertical-align: middle;
    display: inline-block;
    color: $grey1;
  }
}
.brand-title {
  margin-left: 15px;
  font-family: 'Noto Serif', sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 5px;
  width: max-content;
}
.brand-descr {
  height: 28px;
  margin-left: 11px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  border-left: 1px solid #e9e9e9;
  color: $grey2;
  font-size: 9px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 1.5px;
}

section {
  background-color: $dark;
  color: white;
  padding: 0 48px;
}

footer {
  display: flex;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 56px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.footer-bottom {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top: 1px solid #e9e9e9;
  color: $grey2;
  font-size: 10px;
  line-height: 16px;
  border-top-color: hsla(0, 0%, 100%, 0.15);
}
</style>
