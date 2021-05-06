<template>
  <div class="main">
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
export default {
  async asyncData({ $prismic, params, error }) {
    const doc = await $prismic.api.query('')
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
