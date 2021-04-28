<template>
  <div class="main">
    <section class="masthead" role="img" aria-label="Image Description">
      <div class="wrapper">
        <h1>Contact</h1>
      </div>
    </section>

    <div class="section">
      <div class="wrapper">
        <div class="contact">
          <div class="contact-info">
            <h3>Let's Get in Touch</h3>
            <div class="divider bg-color-2"></div>
            <p class="text-grey">
              Interested in working with Bethany Marie Design Studio? We'd love
              to hear from you.
            </p>
          </div>
          <div class="contact-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <div class="side-input-wrapper-50"></div>
              <div class="side-input-wrapper-50"></div>
              <div class="form-columns w-row">
                <div class="w-col w-col-6">
                  <input
                    type="text"
                    class="input w-input"
                    maxlength="256"
                    name="Contact-Name-3"
                    data-name="Contact Name 3"
                    placeholder="Your name"
                    id="Contact-Name-3"
                    required=""
                  />
                </div>
                <div class="w-col w-col-6">
                  <input
                    type="email"
                    class="input w-input"
                    maxlength="256"
                    name="Contact-Email-3"
                    data-name="Contact Email 3"
                    placeholder="Email address"
                    id="Contact-Email-3"
                    required=""
                  />
                </div>
              </div>
              <input
                type="text"
                class="input w-input"
                maxlength="256"
                name="Contact-Phone-2"
                data-name="Contact Phone 2"
                placeholder="Contact Phone"
                id="Contact-Phone-2"
              /><textarea
                id="Contact-Message-3"
                name="Contact-Message-3"
                placeholder="Describe your project..."
                maxlength="5000"
                data-name="Contact Message 3"
                required=""
                class="input text-area w-input"
              ></textarea
              ><input
                type="submit"
                value="Submit Message"
                data-wait="Please wait..."
                class="button color-2 w-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contact {
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
  top: 35%;
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
.contact-info {
  /* display: flex; */
  width: 33.33%;
}
.contact-form {
  width: 67.77%;
  display: flex;
}

.divider {
  width: 100px;
  height: 2px;
  margin-top: 8px;
  margin-bottom: 24px;
}
h3 {
  margin-top: 0px;
  margin-bottom: 12px;
  line-height: 32px;
  font-weight: 400;
  text-transform: capitalize;
}
p {
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 24px;
}
</style>
