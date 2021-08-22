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
              As I have been studying, I have found that I am drawn and inspired
              by a range of styles and continue to develop my own personal
              style.
            </p>
            <img
              class="simple-design"
              src="/simple.webp"
              alt="simple design"
              loading="lazy"
            />
            <p class="info-text">
              Drawn to simple, classic lines of the mid-century modern design
              and blending this with the comfort of a country aesthetic. I love
              to incorporate an injection of personality in every design.
            </p>

            <h4>My Values</h4>
            <p class="info-text">
              Drawn and inspired by the world around me, I love to experiment
              with colours and design. However, each of my designs are centred
              around the following values:
            </p>
            <ul>
              <li>Warmth</li>
              <li>Comfort</li>
              <li>Practicality</li>
            </ul>
            <p class="info-text">
              Join me on my journey to discover my design and how this
              incorporates into my projects.
            </p>
            <SocialButtons />
          </div>
          <div class="right-col">
            <img class="portrait" src="/bm.webp" alt="Bethany" loading="lazy" />
            <p class="info-text">
              I’m Bethany, and like many other people these past two years, I
              have been exploring what motivates and brings me happiness. I kept
              coming back to the same aspect: Design.
            </p>
            <p class="info-text">
              Following 4 years studying Events Management at Sheffield
              University, I have spent the last 8 years working in the
              hospitality and event sector. With a passion for creating an
              experience and happiness, I am now taking those years of
              experience and joining this with my long-time passion of design.
            </p>
            <p class="info-text">
              Even with a passion, to fully begin this new journey I understood
              I needed to gain further knowledge. I have spent the last 6 months
              undertaking the Professional Interior Design Diploma with the
              National Design Academy. After passing in June 2021, I am now
              beginning the bachelor’s degree course. Taking the time to develop
              my skills and broaden my design knowledge.
            </p>
            <p class="info-text">
              Come along with me as I continue this new journey of my life.
              Catch up with me on my Instagram page and blog. Stay tuned for the
              services I look to offer as I progress in this journey!
            </p>
            <img src="/sig.png" alt="Bethany's signature" loading="lazy" />
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
