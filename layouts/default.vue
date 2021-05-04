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
          <div class="footer-sm">
            <div class="social-buttons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                class="social-button dark-bg w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a92c6bace39d6bd2424a_twitter-icon-white.svg"
                  alt="twitter"
              /></a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                class="social-button dark-bg w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925bfc62e394f5f8bf9_facebook-icon-white.svg"
                  alt="facebook"
              /></a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                class="social-button dark-bg w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a9258a9149b9edb7ade9_instagram-icon-white.svg"
                  alt="instagram"
              /></a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener"
                class="social-button dark-bg w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a9268a91497c84b7adea_pinterest-icon-white.svg"
                  alt="pinterest"
              /></a>
            </div>
          </div>
          <div class="footer-col">
            <p class="paragraph-small text-grey">
              1028 &nbsp;Archimedes Avenue, <br />Los Angeles, CA 90210
            </p>
          </div>
          <div class="footer-col">
            <a
              href="mailto:your@email.com?subject=Your%20Subject"
              class="link-grey"
              >bethany@bethanymariedesign.com</a
            >
            <div class="text-grey">+1 213 974-3898</div>
          </div>
          <div class="footer-nav">
            <nuxt-link to="/">home</nuxt-link>
            <nuxt-link to="/portfolio">portfolio</nuxt-link>
            <nuxt-link to="/blog">blog</nuxt-link>
            <nuxt-link to="/about">about</nuxt-link>
            <nuxt-link to="/contact">contact</nuxt-link>
          </div>
        </footer>
        <div class="footer-bottom">
          <div>
            <span class="text-white">Bethany Marie Design</span> &#169;
            {{ year }}
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
@media screen and (max-width: 767px) {
  .brand-title {
    margin-left: 12px !important;
    font-size: 12px !important;
  }
  .brand-descr {
    display: none !important;
  }
}
@media screen and (max-width: 900px) {
  nav {
    display: none !important;
  }
}
header {
  position: sticky;
  left: 0px;
  top: 0px;
  right: 0px;
  z-index: 100;
  background-color: white;
  width: 100%;
  height: 88px;
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

.footer-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  a {
    color: white;
    margin-left: 24px;
    font-size: 10px;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }
  a:hover {
    text-decoration: underline;
  }
}

.footer-sm {
  display: flex;
  width: 25%;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

.footer-col {
  width: 16.66%;
  font-size: 12px;
  line-height: 20px;

  a {
    color: $grey2;
  }
}

.paragraph-small {
  margin-bottom: 16px;
  margin-top: 0;
  font-size: 12px;
  line-height: 20px;
}
</style>
