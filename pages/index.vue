<template>
  <div class="page-wrapper from-opaque">
    <div :class="`main hero ${classes[select]}`">
      <div class="bullet-row">
        <div class="bullets">
          <svg
            @click="clickValue"
            id="0"
            :class="select === 0 ? 'active' : 'inactive'"
            width="10"
            height="10"
          >
            <circle
              nodeValue="0"
              cx="5"
              cy="5"
              r="2"
              stroke="black"
              stroke-width="4"
              fill="black"
            />
          </svg>
          <svg
            @click="clickValue"
            id="1"
            :class="select === 1 ? 'active' : 'inactive'"
            width="10"
            height="10"
          >
            <circle
              value="1"
              cx="5"
              cy="5"
              r="2"
              stroke="black"
              stroke-width="4"
              fill="black"
            />
          </svg>
          <svg
            @click="clickValue"
            id="2"
            :class="select === 2 ? 'active' : 'inactive'"
            width="10"
            height="10"
          >
            <circle
              value="2"
              cx="5"
              cy="5"
              r="2"
              stroke="black"
              stroke-width="4"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="arrows">
        <div class="arrow-wrapper">
          <div class="arrow" @click="clickLeft">
            <img src="/arrow-left-icon.svg" alt="arrow-left" />
          </div>
          <div class="arrow" @click="clickRight">
            <img src="/arrow-right-icon.svg" alt="arrow-right" />
          </div>
        </div>
      </div>
      <div
        class="slide"
        :style="
          this.select === 0
            ? 'opacity: 1; transform: translateX(0); height:100%; transition: opacity 1000ms ease;'
            : 'opacity: 0; transform: translateX(-2884px); visibility: hidden; height:0; transition: opacity 1000ms ease;'
        "
      >
        <div class="left-hero">
          <div class="hero-info">
            <div class="title">Bethany Marie</div>
            <h1>
              <strong><em>Simple</em></strong> & Liveable Interiors
            </h1>
            <p class="break">
              <!-- {{ heroTexts[select].descr }} -->
            </p>
            <nuxt-link
              class="button white-button"
              :to="`${heroTexts[select].buttonHref}`"
              >{{ heroTexts[select].buttonText }}</nuxt-link
            >
          </div>
        </div>
        <div
          class="right-hero"
          :style="`background-image: url(${images[0]});`"
        ></div>
      </div>
      <div
        class="slide"
        :style="
          this.select === 1
            ? 'opacity: 1; transform: translateX(0); height:100%;  transition: opacity 1000ms ease;'
            : 'opacity: 0; transform: translateX(-2884px); visibility: hidden; height:0; transition: opacity 1000ms ease;'
        "
      >
        <div class="left-hero">
          <div class="hero-info">
            <div class="title">Bethany Marie</div>
            <h1>
              <strong><em>Simple</em></strong> & Beautiful Interiors
            </h1>
            <p class="break">
              <!-- {{ heroTexts[select].descr }} -->
            </p>
            <nuxt-link
              class="button white-button"
              :to="`${heroTexts[select].buttonHref}`"
              >{{ heroTexts[select].buttonText }}</nuxt-link
            >
          </div>
        </div>
        <div
          class="right-hero"
          :style="`background-image: url(${images[1]});`"
        ></div>
      </div>
      <div
        class="slide"
        :style="
          this.select === 2
            ? 'opacity: 1; transform: translateX(0); height:100%; transition: opacity 1000ms ease;'
            : 'opacity: 0; transform: translateX(-2884px); visibility: hidden; height:0; transition: opacity 1000ms ease;'
        "
      >
        <div class="left-hero">
          <div class="hero-info">
            <div class="title">Bethany Marie</div>
            <h1>
              <strong><em>Simple</em></strong> & Comfortable Interiors
            </h1>
            <p class="break">
              <!-- {{ heroTexts[select].descr }} -->
            </p>
            <nuxt-link
              class="button white-button"
              :to="`${heroTexts[select].buttonHref}`"
              >{{ heroTexts[select].buttonText }}</nuxt-link
            >
          </div>
        </div>
        <div
          class="right-hero"
          :style="`background-image: url(${images[2]});`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

let touchStartX = 0

export default Vue.extend({
  data() {
    return {
      select: 0,
      classes: ['bg-color-4', 'bg-color-2', 'bg-color-3'],
      images: ['/hero1.webp', '/hero2.webp', '/hero3.webp'],
      autoplay: true,
      heroTexts: [
        {
          title: '<strong><em>Simple</em></strong> & Beautiful Interiors',

          buttonText: 'View Portfolio',
          buttonHref: '/portfolio',
        },
        {
          title: '<strong><em>Simple</em></strong> & Beautiful Interiors',

          buttonText: 'View Services',
          buttonHref: '/services',
        },
        {
          title: '<strong><em>Simple</em></strong> & Beautiful Interiors',

          buttonText: 'about me',
          buttonHref: '/about',
        },
      ],
    }
  },
  methods: {
    clickValue: function (e: any) {
      if (this.autoplay) {
        this.autoplay = false
      }
      this.select = Number(e.target.id || e.target.parentElement.id)
    },
    shiftLeft: function () {
      if (this.select >= 1) {
        this.select--
      } else {
        this.select = this.classes.length - 1
      }
    },
    shiftRight: function () {
      if (this.select <= 1) {
        this.select++
      } else {
        this.select = 0
      }
    },
    clickRight: function () {
      if (this.autoplay) {
        this.autoplay = false
      }
      this.shiftRight()
    },
    clickLeft: function () {
      if (this.autoplay) {
        this.autoplay = false
      }
      this.shiftLeft()
    },
    autoSlide: function () {
      if (this.autoplay) {
        this.shiftRight()
        setTimeout(this.autoSlide, 6000)
      }
    },

    touchStart: function (e: any) {
      // e.preventDefault()
      touchStartX = e.targetTouches[0].clientX
    },
    touchDrag: function (e: any) {
      // e.preventDefault()
      // console.log(e)
      if (
        touchStartX !== 0 &&
        Math.abs(touchStartX - e.targetTouches[0].clientX) > 150
      ) {
        if (touchStartX - e.targetTouches[0].clientX < 0) {
          this.clickLeft()
        } else {
          this.clickRight()
        }
        touchStartX = 0
      }
    },
  },
  mounted() {
    setTimeout(this.autoSlide, 6000)
    document
      .querySelector('.hero')
      ?.addEventListener('touchstart', this.touchStart)

    document
      .querySelector('.hero')
      ?.addEventListener('touchmove', this.touchDrag)
  },
  beforeDestroy() {
    document
      .querySelector('.hero')
      ?.removeEventListener('touchstart', this.touchStart)

    document
      .querySelector('.hero')
      ?.removeEventListener('touchmove', this.touchDrag)
  },
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .page-wrapper {
    .hero {
      height: unset;
    }
  }
}
@media screen and (max-width: 1200px) {
  .bullet-row {
    bottom: unset !important;
  }
  .page-wrapper {
    .right-hero {
      width: 100%;
      height: 100vh;
      max-height: 50vh;
    }
    .left-hero {
      width: 100%;
      height: 50%;
    }
    .hero-info {
      padding: 64px 0;
    }
  }
  .arrows {
    display: none !important;
  }
}
.inactive {
  opacity: 0.5;
}
.hidden {
  display: none;
  opacity: 0;
}
.shown {
  display: block !important;
  opacity: 1 !important;
}
.break {
  width: 100%;
}
.arrows {
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 4;

  .arrow-wrapper {
    background-color: white;
    display: grid;
    /* padding: 15px; */
    grid-template-columns: 1fr 1fr;
    width: 134px;
    height: 62px;
    place-items: center;
    margin-right: 15px;
  }
  .arrow {
    /* margin: 0 10px; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
      max-width: 32px;
    }

    &:hover {
      cursor: pointer;
      background-color: rgb(233, 226, 226, 0.5);
      opacity: 0.6;
    }
  }
}
.bullet-row {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.bullets {
  background-color: white;
  border-radius: 12px;
  padding: 3px 8px;
  z-index: 5;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
}
.slide {
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;
  transition: opacity 1000ms ease;
  width: 100%;
}
.hero {
  width: 100vw;
  height: 100vh;
  max-height: 1200px;
  color: white;
  z-index: 1;
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;
  margin-top: 0 !important;
}

.right-hero {
  width: 50%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: opacity 1000ms ease;
}
.left-hero {
  width: 50%;
  height: 100%;
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
