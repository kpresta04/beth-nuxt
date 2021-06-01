<template>
  <div class="main">
    <Masthead url="/sj39.webp" text="Our Services" bgColor="5" />

    <div class="section">
      <div class="prismic-wrapper">
        <prismic-rich-text :field="service.data.text_content" />
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
export default {
  components: { Masthead },
  async asyncData({ $prismic, params, error }) {
    const service = await $prismic.api.getSingle('services_page')

    console.log(service)
    if (service) {
      return { service }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
.prismic-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 660px;
  padding: 0 10px;
}
</style>
