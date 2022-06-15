<template>
  <div
    :class="scroll ? 'scroll' : ''"
    class="main-header bg-primary flex items-center h-12 z-30"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div v-if="!isLogedIn" class="auth flex justify-center items-center h-10">
        <span class="flex justify-center items-center">
          <font-awesome-icon
            :icon="['far', 'user']"
            class="user text-secondary text-lg font-bold mx-2"
          />
        </span>
        <router-link
          :to="{ name: 'Login' }"
          class="px-1 text-secondary text-lg"
          >{{ $t("buttons.login") }}</router-link
        >
        <span class="text-secondary text-lg font-bold">/</span>
        <router-link
          :to="{ name: 'Register' }"
          class="px-1 text-secondary font-bold"
          >{{ $t("buttons.signUp") }}</router-link
        >
      </div>
      <div v-else>
        <profile />
      </div>

      <ul class="social-icon flex justify-center items-center h-10">
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
          <!-- <a><i class="fab fa-instagram"></i></a> -->
        </li>
      </ul>
      <locale-switcher />
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "../components/LocaleSwitcher.vue";
import Profile from "../components/Profile.vue";
export default {
  components: {
    LocaleSwitcher,
    Profile,
  },
  data() {
    return {
      scroll: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 50) {
        this.scroll = true;
        return;
      }
      this.scroll = false;
      return;
    },
  },
  computed: {
    isLogedIn() {
      return this.$store.getters.isLogedIn;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  animation: fadeUp 0.3s linear;
  &.scroll {
    animation: fadeIn 0.8s linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fadeUp {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
