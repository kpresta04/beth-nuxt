<template>
  <div class="main">
    <Masthead align="center" url="/about-hero.jpg" text="About Me" />
    <div class="section">
      <div class="wrapper">
        <div class="flex-wrapper">
          <div class="left-col">
            <h2>
              <strong><em>Simple</em></strong> &#38; Elegant Design
            </h2>
            <div class="divider"></div>
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates dolorum veritatis voluptatem quia obcaecati dolor autem
              et sit velit, dolore, veniam numquam cum, perspiciatis nostrum
              nulla tempore quisquam? Ullam, eligendi!
            </p>
            <img
              class="simple-design"
              src="/simple.jpg"
              alt="simple design"
              loading="lazy"
            />
            <p class="info-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              ducimus doloremque quisquam debitis ad eaque iste voluptatem
              sapiente excepturi repellendus natus ipsa quia quos facilis, amet
              expedita iusto laboriosam vitae labore harum possimus inventore
              non eligendi? Pariatur cumque, minus dolores nemo amet voluptatum
              explicabo illo modi, reprehenderit dolorem id corporis.
            </p>

            <h4>My Values</h4>
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              dignissimos omnis magnam deleniti doloremque unde soluta hic modi
              consectetur fugiat?
            </p>
            <ul>
              <li>Value</li>
              <li>Value</li>
              <li>Value</li>
              <li>Value</li>
            </ul>
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              aperiam quidem reiciendis quo cupiditate modi laudantium quia
              praesentium, quasi autem dolore. Repudiandae sit cumque soluta.
              Blanditiis doloribus ex commodi. Laudantium!
            </p>
            <SocialButtons />
          </div>
          <div class="right-col">
            <img
              class="portrait"
              src="/placeholder.jpg"
              alt="Bethany"
              loading="lazy"
            />
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              vero quidem quis reiciendis illum molestias tempora tempore nam
              nostrum deserunt!
            </p>
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut neque
              dolore nihil nobis, aliquid id.
            </p>
            <p class="info-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              ab laborum architecto nulla animi excepturi, hic optio voluptatem
              dolores corporis illo quod at praesentium. Sint odit accusantium
              fuga molestiae maxime.
            </p>
            <img src="/sig.png" alt="Bethany's signature" loading="lazy" />
            <div class="img-wrapper">
              <img
                class="vert"
                src="/vert-about.jpg"
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
    margin-top: 72px;
  }
  img {
    max-width: 160px;
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
      max-width: 200px;
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
