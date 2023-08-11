<template>
  <div class="social-buttons sb-component">
    <a
      href="https://www.instagram.com/bethanymarie_designs/"
      target="_blank"
      rel="noopener"
      class="social-button w-inline-block"
    >
      <img
        v-if="bg === 'light'"
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925ca79973c1bcc8cb1_instagram-icon.svg"
        alt="instagram"
        loading="lazy"
      />

      <img
        v-else
        src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a9258a9149b9edb7ade9_instagram-icon-white.svg"
        alt="instagram"
        loading="lazy"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: 'light',
    },
  },
}
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
