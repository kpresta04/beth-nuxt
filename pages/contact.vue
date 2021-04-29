<template>
  <div class="main">
    <Masthead />

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
            <a
              href="mailto:your@email.com?subject=Your%20Subject"
              rel="noopener"
              target="_blank"
              class="link w-inline-block"
              ><div>bethany@bmdesign.com</div>
              <div class="link-underline"></div
            ></a>
            <div class="social-buttons contact-v1-social">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                class="social-button w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a92cbfc62e30ac5f8bff_twitter-icon.svg"
                  alt="twitter" /></a
              ><a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                class="social-button w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925fc16dc6e43b318b4_facebook-icon.svg"
                  alt="facebook" /></a
              ><a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                class="social-button w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a925ca79973c1bcc8cb1_instagram-icon.svg"
                  alt="instagram" /></a
              ><a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener"
                class="social-button w-inline-block"
                ><img
                  src="https://assets.website-files.com/5be96776163440d16fc0e74c/5be9a9266bace31352d24249_pinterest-icon.svg"
                  alt="pinterest"
              /></a>
            </div>
          </div>
          <div class="contact-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <div class="form-grid">
                <!-- <div class="form-columns w-row">
               <div class="w-col w-col-6">
                  </div> 
                </div> -->
                <input
                  type="text"
                  class="input w-input"
                  maxlength="256"
                  name="Contact-Name-3"
                  data-name="Contact Name 3"
                  placeholder="Your name"
                  id="Contact-Name-3"
                  required
                />
                <!-- <div class="w-col w-col-6"></div> -->
                <input
                  type="email"
                  class="input w-input"
                  maxlength="256"
                  name="Contact-Email-3"
                  data-name="Contact Email 3"
                  placeholder="Email address"
                  id="Contact-Email-3"
                  required
                />
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
                  required
                  class="input text-area w-input"
                ></textarea
                ><input
                  id="submit-btn"
                  type="submit"
                  value="Submit Message"
                  data-wait="Please wait..."
                  class="button bg-color-2 w-button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
export default {
  components: { Masthead },
}
</script>

<style lang="scss" scoped>
#submit-btn {
  color: $c2-complement;
}
@media screen and (max-width: 479px) {
  .contact {
    margin-right: -8px !important;
    margin-left: -8px !important;
    padding: 64px !important;
    padding-right: 16px !important;
    padding-left: 16px !important;
    border-right-style: none !important;
    border-left-style: none !important;
  }
}
@media screen and (min-width: 620px) {
  .form-grid {
    display: grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
  #submit-btn {
    grid-column: 1;
    grid-row: 4;
    width: fit-content;
  }
  #Contact-Phone-2 {
    grid-row: 2;
    grid-column: 1 / 3;
  }
  #Contact-Message-3 {
    grid-row: 3;
    grid-column: 1 / 3;
  }
  #Contact-Email-3 {
    grid-row: 1;
    grid-column: 2;
  }
  #Contact-Name-3 {
    grid-row: 1;
    grid-column: 1;
  }
  #email-form {
    width: 100%;
  }
  .contact-info {
    padding-top: 12px;
    width: 33.33%;
    margin-top: 0;
  }
  .contact-form {
    width: 67.77%;
  }
}
@media screen and (min-width: 1025px) {
  .contact-info {
    padding-top: 12px;
    width: 33.33% !important;
    margin-top: 0;
  }
  .contact-form {
    width: 67.77% !important;
    margin-top: 0 !important;
  }
}
.contact {
  display: flex;
  margin-right: 15px;
  margin-left: 15px;
  padding: 104px 7%;
  border: 1px solid $grey4;
  flex-wrap: wrap;
}

.link {
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin-top: -4px;
  padding-top: 4px;
  padding-bottom: 4px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: inset 0 -1px 0 0 #d1d1d1;
  -webkit-transition: all 150ms ease;
  transition: all 150ms ease;
  color: #151515;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
}
.link:hover .link-underline {
  width: 100%;
}
.link-underline {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  display: block;
  width: 0px;
  height: 1px;
  margin-right: auto;
  margin-left: 0px;
  transition: all 1s ease;
  background-color: #151515;
}

.contact-info {
  display: flex;
  width: 100%;
  padding-right: 4%;
  padding-left: 15px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.contact-form {
  width: 100%;
  display: flex;
  margin-top: 48px;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
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

.contact-v1-social {
  margin-top: 24px;
}

.social-button {
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  -webkit-transition: border-color 200ms ease;
  transition: border-color 200ms ease;

  &:hover {
    border-color: $dark;
  }
}

.input {
  height: 48px;
  width: 100%;
  margin-bottom: 24px;
  padding: 11px 24px 12px;
  border-style: none;
  background-color: #f6f6f6;
  -webkit-transition: border-color 300ms ease, background-color 300ms ease;
  transition: border-color 300ms ease, background-color 300ms ease;
  font-size: 14px;
  line-height: 24px;
}
</style>
