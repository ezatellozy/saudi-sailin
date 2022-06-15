<template>
  <section>
    <div
      class="nav-bar hidden lg:block"
      :class="$route.fullPath == '/' ? '' : 'not-home'"
    >
      <div class="container mx-auto flex justify-between">
        <router-link to="/" class="logo">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <div class="nav-items flex flex-1 justify-end">
          <div class="links w-full flex justify-end">
            <router-link to="/about" class="link">{{
              $t("buttons.federation")
            }}</router-link>
            <router-link to="/events" v-if="false" class="link">{{
              $t("buttons.events")
            }}</router-link>
            <router-link to="/contact-us" class="link">{{
              $t("buttons.contact")
            }}</router-link>
            <router-link to="/license" class="link">{{
              $t("buttons.license")
            }}</router-link>
            <router-link to="/settings/profile" class="link">{{
              $t("buttons.membership")
            }}</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar-sm lg:hidden">
      <div class="nav-bar-container-sm">
        <router-link to="/" class="logo">
          <img src="../assets/logo.png" alt="logo" />
        </router-link>
        <div @click="isOpen()" class="nav-btn">
          <span>
            <font-awesome-icon
              :icon="['fas', 'bars']"
              class="text-primary text-4xl"
            />
          </span>
        </div>
      </div>

      <div class="nav-menu" id="nav-menu" @click="isOpen()">
        <ul class="nav-items">
          <li>
            <router-link to="/about" class="link"> Federation </router-link>
          </li>
          <li>
            <router-link to="/events" class="link"> Events </router-link>
          </li>
          <li>
            <router-link to="/contact-us" class="link">
              Get in touch
            </router-link>
          </li>
          <li>
            <router-link to="/license" class="link">{{
              $t("buttons.license")
            }}</router-link>
          </li>
          <li>
            <router-link to="/settings/profile" class="link">{{
              $t("buttons.membership")
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    isOpen() {
      this.openMenu = !this.openMenu;
      document.getElementById("nav-menu").classList.toggle("opend-menu");
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.nav-items {
  .links {
    .link {
      height: 96px;
      @apply flex items-center relative overflow-hidden;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        top: 0;
        left: -100%;
        @apply bg-secondary;
        transition: 0.3s linear;
      }
      &:hover,
      &.router-link-exact-active.router-link-active {
        &::before {
          left: 0;
        }
      }
    }
  }
}
</style>
