<template>
  <div class="social-buttons sb-component">
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener"
      class="social-button w-inline-block"
      ><img
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a92cbfc62e30ac5f8bff_twitter-icon.svg"
        alt="twitter"
        loading="lazy" /></a
    ><a
      href="https://facebook.com"
      target="_blank"
      rel="noopener"
      class="social-button w-inline-block"
      ><img
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925fc16dc6e43b318b4_facebook-icon.svg"
        alt="facebook"
        loading="lazy" /></a
    ><a
      href="https://instagram.com"
      target="_blank"
      rel="noopener"
      class="social-button w-inline-block"
      ><img
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925ca79973c1bcc8cb1_instagram-icon.svg"
        alt="instagram"
        loading="lazy" /></a
    ><a
      href="https://pinterest.com"
      target="_blank"
      rel="noopener"
      class="social-button w-inline-block"
      ><img
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a9266bace31352d24249_pinterest-icon.svg"
        alt="pinterest"
        loading="lazy"
    /></a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sb-component {
  .social-button {
    border: 1px solid #e9e9e9;
    border-radius: 50%;
    -webkit-transition: border-color 200ms ease;
    transition: border-color 200ms ease;

    &:hover {
      border-color: $dark;
    }
  }
}
</style>
