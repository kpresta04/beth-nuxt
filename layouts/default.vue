<template>
  <div class="layout">
    <header>
      <div class="nav-wrapper">
        <div class="brand-info">
          <nuxt-link to="/">
            <img src="/sc.svg" alt="logo" />
            <div class="brand-title">Bethany Marie</div>
            <div class="brand-descr">Design</div>
          </nuxt-link>
        </div>
        <div id="h-wrapper" class="hamburg-wrapper">
          <div class="hamburg">
            <div
              :style="
                menuOpen
                  ? 'transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg); transform-style: preserve-3d;'
                  : 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;'
              "
              class="top-bun"
            ></div>
            <div
              :style="menuOpen ? 'opacity: 0' : 'opacity: 1'"
              class="patty"
            ></div>
            <div
              class="bottom-bun"
              :style="
                menuOpen
                  ? 'transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg); transform-style: preserve-3d;'
                  : 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;'
              "
            ></div>
          </div>
        </div>
        <nav>
          <nuxt-link to="/portfolio">portfolio</nuxt-link>
          <nuxt-link to="/blog">blog</nuxt-link>
          <nuxt-link to="/about">about</nuxt-link>
          <nuxt-link to="/contact">contact</nuxt-link>
        </nav>
      </div>
    </header>
    <div
      class="nav-menu"
      :style="
        menuOpen
          ? 'transform: translateY(0px) translateX(0px); transition: transform 400ms;'
          : 'transform: translateY(-6000px) translateX(0px); transition: transform 400ms;'
      "
    >
      <nuxt-link class="nav-link" to="/">home</nuxt-link>
      <nuxt-link class="nav-link" to="/portfolio">portfolio</nuxt-link>
      <nuxt-link class="nav-link" to="/blog">blog</nuxt-link>
      <nuxt-link class="nav-link" to="/about">about</nuxt-link>
      <nuxt-link class="nav-link" to="/contact">contact</nuxt-link>
    </div>
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
                href="https://www.instagram.com/bethanymarie_designs/"
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
            <!-- <p class="paragraph-small text-grey">
              1028 &nbsp;Arch Avenue, <br />Los Angeles, CA 90210
            </p> -->
          </div>
          <div class="footer-col">
            <!-- <a
              href="mailto:your@email.com?subject=Your%20Subject"
              class="link-grey"
              >bethany@bmdesign.com</a
            >
            <div class="text-grey">+1 213 974-3898</div> -->
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

const hamburgClasses = [
  'hamburg-wrapper',
  'hamburg',
  'top-bun',
  'patty',
  'bottom-bun',
]

export default Vue.extend({
  data() {
    return {
      year: 2021,
      menuOpen: false,
      menuChanging: false,
    }
  },
  created() {
    const date = new Date()
    this.year = date.getFullYear()
  },
  mounted() {
    document.addEventListener('click', this.closeMenu)
    const hWrapper = document.querySelector('#h-wrapper')
    hWrapper?.addEventListener('touchend', this.openMenu)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu)
    const hWrapper = document.querySelector('#h-wrapper')
    hWrapper?.removeEventListener('touchend', this.openMenu)
  },
  methods: {
    closeMenu: function (e: any) {
      // console.log(hamburgClasses.includes(e.target.className))
      if (this.menuOpen) {
        if (!hamburgClasses.includes(e.target.className)) {
          this.menuOpen = false
        } else if (!this.menuChanging) {
          this.menuOpen = false
        }
      }
    },
    openMenu: function () {
      // console.log('togglin')
      if (!this.menuOpen) {
        this.menuChanging = true
        this.menuOpen = true

        setTimeout(() => {
          this.menuChanging = false
        }, 300)
      }
    },
  },
})
</script>

<style lang="scss">
@media screen and (max-width: 767px) {
  .brand-descr {
    display: none !important;
  }
  .nav-menu {
    top: 60px !important;
  }
  .footer-nav {
    justify-content: unset !important;
    a {
      margin-right: 16px !important;
    }
  }
  header {
    height: 60px !important;
  }
}
@media screen and (max-width: 900px) {
  footer {
    padding: 40px 0 !important;
  }
  footer > * {
    width: 100% !important;
  }
  .footer-col {
    width: 50% !important;
    margin: 24px 0;
  }
  .footer-nav a {
    margin-left: 0 !important;
    margin-right: 24px;
  }
  .nav-wrapper {
    display: flex !important;
    justify-content: space-between !important;
  }
  nav {
    display: none !important;
  }
  .hamburg-wrapper {
    display: flex !important;
  }
}

.hamburg-wrapper {
  display: none;
  height: 100%;
  width: 100%;
  max-width: 60px;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  z-index: 42;
}
.hamburg {
  width: 20px;
  height: 20px;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  z-index: 2;
}
.top-bun,
.patty,
.bottom-bun {
  height: 2px;
  background-color: $dark;
}
.patty {
  margin-top: 4px;
  margin-bottom: 4px;
  transition: opacity 200ms ease-in;
}

.top-bun,
.bottom-bun {
  transition: transform 400ms ease;
}
.nav-menu {
  z-index: 45;
  position: fixed;
  left: 0px;
  top: 88px;
  right: 0px;
  background-color: white;

  .nav-link {
    padding: 12px 24px;
    box-shadow: 0 1px 0 0 #e9e9e9;
    text-transform: capitalize;
  }
}
header {
  position: fixed;
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
.layout {
  a {
    display: flex;
    align-items: center;
    color: $dark;
  }
}
.nav-wrapper {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
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
  flex-wrap: wrap-reverse;
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
  word-break: break-word;

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
