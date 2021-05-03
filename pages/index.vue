<template>
  <div class="page-wrapper">
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
      <div class="left-hero">
        <div class="hero-info">
          <div class="title">Bethany Marie</div>
          <h1>
            <strong><em>Simple</em></strong> & Stylish Interiors
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
      <div
        class="right-hero"
        :style="`background-image: url(${images[select]});`"
      >
        <div class="arrows">
          <div @click="shiftLeft">left</div>
          <div @click="shiftRight">right</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      select: 0,
      classes: ['bg-color-4', 'bg-color-2', 'bg-color-3'],
      images: ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'],
      autoplay: true,
    }
  },
  methods: {
    clickValue: function (e: any) {
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
}
.inactive {
  opacity: 0.5;
}
.arrows {
  position: absolute;
  width: 100%;
  right: 0px;
  display: flex;
  bottom: 1%;
  justify-content: flex-end;
  margin-right: 63px;

  div {
    margin: 0 10px;

    &:hover {
      cursor: pointer;
    }
  }
}
.bullet-row {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.bullets {
  background-color: white;
  border-radius: 12px;
  padding: 3px 8px;
  z-index: 4;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
}
.hero {
  width: 100vw;
  height: 100vh;
  max-height: 1200px;
  margin-top: -88px;
  color: white;
  z-index: 1;
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;
}

.right-hero {
  width: 50%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
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
