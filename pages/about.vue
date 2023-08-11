<template>
  <div class="main">
    <Masthead
      align="center"
      url="/about-hero.webp"
      text="About Me"
      bgColor="3"
    />
    <div class="section">
      <div class="wrapper">
        <div class="flex-wrapper">
          <div class="left-col">
            <h2>
              <strong><em>Simple</em></strong> &#38; Elegant Design
            </h2>
            <div class="divider"></div>
            <p class="info-text">
              Working holistically with clients to create a beautiful design.
              With an emphasis on comfortable, liveable spaces, we curate
              designs to match their personality.
            </p>
            <img
              class="simple-design"
              src="/simple.webp"
              alt="simple design"
              loading="lazy"
            />
            <p class="info-text">
              Drawn to simple, classic lines of the modern farmhouse design,
              blending this with the comfort of a country aesthetic. I love to
              incorporate a touch of personality in every design.
            </p>

            <h4>My Values</h4>
            <p class="info-text">
              With the client at the forefront my work is centred around the
              following values:
            </p>
            <ul>
              <li>Offering a simple approach at an affordable price</li>
              <li>
                Working with clients with respect and integrity at the forefront
              </li>
              <li>Ensuring a comfortable environment for my clients</li>
              <li>
                Focus on creating comfortable, liveable and functional spaces
              </li>
            </ul>
            <p class="info-text">
              Join me on my journey to discover my design and how this
              incorporates into my projects.
            </p>
            <SocialButtons />
          </div>
          <div class="right-col">
            <img
              class="portrait"
              src="/bmmawife.png"
              alt="Bethany"
              loading="lazy"
            />
            <p class="info-text">
              I’m Bethany, over recent years I have been exploring what
              motivates and brings me happiness. I kept coming back to the same
              aspect: Design.
            </p>
            <p class="info-text">
              Following 4 years studying Events Management at Sheffield
              University, I have spent the last 10 years working in the
              hospitality and event sector. With a passion for creating an
              experience and happiness, I am now taking those years of
              experience and joining this with my long-time passion of design. I
              am currently studying Interior Design with the National Design
              Academy and am looking to start my own business in the near
              future.
            </p>
            <p class="info-text">
              My personal inspirations have come from the experiences I have
              lived and the place i travel, in particular my time in the United
              States. My personal design style lends towards neutral palettes,
              an abundance of textures and classic lines. However, I love to
              work with your close memories and interests to create a beautiful
              and meaningful design that you will love.
            </p>
            <p class="info-text">
              Come along with me as I continue this new journey of my life and
              catch up with me on my Instagram page and Threads.
            </p>
            <div class="img-wrapper">
              <img
                class="vert"
                src="/vert-about.webp"
                alt="room"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import SocialButtons from '~/components/SocialButtons.vue'
export default {
  components: { Masthead, SocialButtons },
}
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 6px;
  font-size: 0.88rem;
}
.img-wrapper {
  display: flex;
  justify-content: center;
}
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 2px;
  justify-content: center;
}
.right-col {
  margin-top: 24px;
  .vert {
    display: inline-block;
    width: 100%;
    max-width: 350px;
    height: auto;
    max-height: 622px;
    margin-top: 72px;
  }
  .portrait {
    max-width: 160px;
    height: auto;
  }
  img {
    max-width: 200px;
    height: auto;
  }
  img:first-child:not(.vert) {
    float: left;
    margin-right: 24px;
    margin-bottom: 10px;
  }
}
.left-col {
  .simple-design {
    margin-bottom: 10px;
    width: 100%;
    max-width: 540px;
    height: auto;
  }
}
@media screen and (min-width: 768px) {
  .flex-wrapper {
    justify-content: space-between !important;
  }
  .left-col {
    max-width: 350px;
  }
  .right-col {
    max-width: 330px;
  }
}
@media screen and (min-width: 1024px) {
  .left-col {
    max-width: 450px;
  }
  .right-col {
    max-width: 400px;

    .portrait {
      max-width: 200px !important;
    }
  }
}
@media screen and (min-width: 1200px) {
  .left-col {
    max-width: 600px;
  }
  .right-col {
    max-width: 500px;
  }
}
</style>
