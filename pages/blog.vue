<template>
  <div class="main">
    <Masthead url="/flowers.webp" text="Blog" />

    <div class="section">
      <div class="wrapper">
        <ul>
          <li v-for="result in doc.results" :key="result.id">
            <nuxt-link :to="`/blog/${result.slugs[0]}`">{{
              result.slugs[0]
            }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
export default {
  components: { Masthead },
  async asyncData({ $prismic, params, error }) {
    const doc = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post')
    )
    console.log(doc.results)
    if (doc) {
      return { doc }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped></style>
