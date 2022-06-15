<template>
  <div
    id="app"
    class="flex flex-col min-h-screen overflow-hidden"
    :class="{ 'is-rtl': $i18n.locale === 'ar' }"
  >
    <main-header />
    <nav-bar v-if="!navigation" />
    <transition name="fade-in">
      <router-view />
    </transition>
    <main-footer />
    <!-- <router-link /> -->
    <!-- <div id="app-box"></div> -->
    <!--<search />
    <router-view />
    <main-footer class="mt-auto" />
    <news-popup
      class="transition-all duration-700 z-50"
      :class="newPage && open ? 'bottom-0' : '-bottom-full'"
      @close="
        newPage = false;
        open = false;
      "
    /> -->
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
import NavBar from './components/NavBar.vue'
// import MainFooter from "@/components/MainFooter";
// import debounce from "lodash/debounce";

export default {
  components: {
    MainHeader,
    NavBar,
    MainFooter,
  },
  data() {
    return {
      newPage: false,
      open: false,
      navigation: false,
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    },
  },
  // mounted() {
  //   console.log(this.$store.getters.isLogedIn);
  // },

  created() {
    this.checkRoute()
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === 'Login' ||
        this.$route.name === 'Register' ||
        this.$route.name === 'ForgotPassword'
      ) {
        this.navigation = true
        return
      }
      this.navigation = false
    },
  },
}
</script>

<style lang="scss">
.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(0);
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
}

.fade-in-enter-to,
.fade-in-leave {
  opacity: 1;
  transform: translateY(-30);
}

.fadeInLeft {
  animation: fadeInLeft 0.8s forwards;
}
.fadeInRight {
  animation: fadeInRight 0.8s forwards;
}

@keyframes fadeInLeft {
  0% {
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
