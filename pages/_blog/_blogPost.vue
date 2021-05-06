<template>
  <div class="main"></div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    // const doc = await $prismic.api.query('')
    console.log(params)
    // if (doc) {
    //   return { doc }
    // } else {
    //   error({ statusCode: 404, message: 'Page not found' })
    // }
  },
}
</script>

<style lang="scss" scoped></style>
