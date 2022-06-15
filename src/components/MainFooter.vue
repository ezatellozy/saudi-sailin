<template>
  <div class="footer flex justify-between flex-wrap pt-12">
    <div class="logo pl-4 flex justify-center flex-col">
      <img src="../assets/footerlogo.png" alt="LOGO" />
    </div>
    <div class="text flex-1 md:justify-end">
      <ul class="links md:mb-5 self-end w-full md:w-3/4 flex flex-wrap">
        <div class="w-full flex flex-wrap md:w-2/3">
          <li class="w-1/2">
            <router-link class="link" to="/">{{
              $t("buttons.home")
            }}</router-link>
          </li>
          <li class="w-1/2">
            <router-link class="link" to="/about">{{
              $t("buttons.federation")
            }}</router-link>
          </li>
          <li class="w-1/2">
            <router-link class="link" to="/events">{{
              $t("buttons.events")
            }}</router-link>
          </li>
          <li class="w-1/2">
            <router-link class="link" to="/contact-us">{{
              $t("buttons.contact")
            }}</router-link>
          </li>
          <li class="w-1/2">
            <router-link class="link" to="/license">{{
              $t("buttons.license")
            }}</router-link>
          </li>
          <li class="w-1/2">
            <router-link class="link" to="/settings/profile">{{
              $t("buttons.membership")
            }}</router-link>
          </li>
        </div>
        <div class="w-full flex flex-wrap md:w-1/3">
          <li class="w-1/2 md:w-full">
            <div class="flex justify-center md:justify-start items-center">
              <font-awesome-icon
                class="text-white text-lg xl:text-xl"
                :icon="['far', 'envelope']"
              />

              <p class="ml-1 text-white text-lg xl:text-xl">
                info@sailsaudi.com
              </p>
            </div>
          </li>
          <li class="w-1/2 md:w-full">
            <div
              v-if="false"
              class="flex justify-center md:justify-start items-center"
            >
              <font-awesome-icon
                class="text-white text-lg xl:text-xl"
                :icon="['fas', 'phone-alt']"
              />
              <p class="ml-1 text-white text-lg xl:text-xl">01010101010</p>
            </div>
          </li>
          <li class="w-full">
            <ul
              class="social-icon flex justify-center md:justify-start items-center h-10"
            >
              <li>
                <a class="twitter">
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="text-primary hover:text-white text-lg"
                  />
                </a>
              </li>
              <li>
                <a class="face">
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="text-primary hover:text-white text-lg"
                  />
                </a>
              </li>
              <li>
                <a class="insta">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="text-primary hover:text-white text-lg"
                  />
                </a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
.footer {
  .logo {
    max-width: 221px;
    p {
      margin: 10px 0 0 !important;
      line-height: 1.5;
      color: #1e3002;
      width: 200px;
      font-size: 13px;
      font-weight: bold;
    }
  }
  .text {
    @apply flex flex-1  items-end xl:items-center;
    background-image: url("../assets/footer.svg");
    background-size: cover;
    @media (max-width: 768px) {
      background-position: center center;
    }
    background-repeat: no-repeat;
    min-height: 250px;
    .social-icon {
      li {
        @apply mx-1;
        // padding: 0 5px;
      }
      a {
        @apply inline-flex justify-center items-center cursor-pointer bg-white rounded-full;
        transition: 0.3s linear;
        width: 35px;
        height: 35px;
        &:hover {
          & > svg {
            @apply text-white;
          }
          &.face {
            background-color: #3b5998;
            border-color: #3b5998;
          }
          &.twitter {
            background: #1a90d9;
            border-color: #1a90d9;
          }
          &.insta {
            background: #ff5252;
            border-color: #ff5252;
          }
        }
      }
    }
    .links {
      li {
        padding-bottom: 8px;
        .link {
          &:hover,
          .link.router-link-exact-active {
            color: #1e3002;
          }
        }
        a {
          &.link {
            @apply xl:text-xl;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
            &:hover,
            &.router-link-exact-active.router-link-active {
              color: #1e3002;
              transition: 0.3s;
            }
          }
        }
      }
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
}

@media (max-width: 1024px) {
  .footer .logo {
    display: none;
  }
}

/* Footer */

.is-rtl {
  .footer {
    direction: ltr;
  }
}
</style>
