<template>
  <div class="main">
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>Contact</h1>
    </section>

    <div class="section">
      <div class="wrapper">
        <div class="contact-form"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
  padding: 104px 7%;
  border: 1px solid $grey2;
}
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  width: 100%;
  height: 40vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 61%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('/contact.jpg') no-repeat center center scroll;
}

h1 {
  position: absolute;
  top: 30%;
  left: 10%;
  font-style: normal;
  font-weight: bold;
  font-family: Courier, sans-serif;
  color: #eee;
  font-size: 40px;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 28px;
}
</style>
