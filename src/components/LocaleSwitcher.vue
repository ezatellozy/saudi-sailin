<template>
  <div
    class="cursor-pointer items-center"
    @click="switchLang"
    style="display: flex"
  >
    <!-- <img
      :src="require(`../assets/images/${lang}.png`)"
      width="30"
      alt=""
      class="mx-1"
    /> -->
    <img src="" alt="" />

    <span class="text-white font-bold">{{ $t(`locales.${lang}`) }}</span>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data: () => ({
    lang: "ar",
  }),

  mounted() {
    this.lang = this.$i18n.locale === "ar" ? "en" : "ar";
  },

  methods: {
    switchLang() {
      Cookies.set("locale", this.lang);
      setTimeout(() => {
        window.location.reload();
      }, 300);
    },
  },
};
</script>
