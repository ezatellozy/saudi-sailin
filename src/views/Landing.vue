<template>
  <div></div>
  <!-- <div
    class="flex flex-col justify-between items-center landing-page"
    style="height: 100vh"
  >
    <div class="w-full flex flex-col">
      <div
        class="h-32 border-b-8 bg-primary"
        style="border-color: #fe9711"
      ></div>
      <div
        class="bg-primary py-6 px-12 rounded-full inline-block mx-auto -mt-20"
      >
        <figure class="w-56" style="">
          <img src="@/assets/a-logo.png" class="w-full h-full" alt="" />
        </figure>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div
        class="px-16 text-center flex flex-col justify-center border-r landing-lang"
      >
        <figure @click="$i18n.locale = 'en'">
          <router-link to="/"
            ><img src="@/assets/images/en.png" alt=""
          /></router-link>
        </figure>
        <div
          @click="$i18n.locale = 'en'"
          class="text-primary text-3xl font-bold mt-6"
        >
          <router-link to="/"> English</router-link>
        </div>
      </div>
      <div class="px-16 text-center flex flex-col justify-center">
        <figure @click="$i18n.locale = 'ar'">
          <router-link to="/"
            ><img src="@/assets/images/ar.png" alt=""
          /></router-link>
        </figure>
        <div
          @click="$i18n.locale = 'ar'"
          class="text-primary text-3xl font-bold mt-6"
        >
          <router-link to="/"> اللغة العربية</router-link>
        </div>
      </div>
    </div>
    <div class="w-auto py-4 rounded-t-3xl" style="background: #fe9711">
      <ul class="flex mx-2">
        <li class="px-4 border-r landing-social">
          <a :href="` ${settings.contacts_facebook} `"
            ><font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="text-4xl text-white"
          /></a>
        </li>
        <li class="px-4 border-r landing-social">
          <a :href="` ${settings.contacts_twitter} `"
            ><font-awesome-icon
              :icon="['fab', 'twitter']"
              class="text-4xl text-white"
          /></a>
          <i class="fab fa-twitter"></i>
        </li>
        <li class="px-4">
          <a :href="` ${settings.contacts_twitter} `"
            ><font-awesome-icon
              :icon="['fab', 'whatsapp']"
              class="text-4xl text-white"
          /></a>
        </li>
      </ul>
    </div>
  </div> -->
</template>
<script>
export default {
  // data() {
  //   return {
  //     settings: [],
  //   };
  // },
  // mounted() {
  //   this.getSettings();
  // },
  // methods: {
  //   getSettings() {
  //     this.axios.get("settings").then(({ data }) => {
  //       this.settings = data.settings;
  //       // console.log(this.settings.contacts_facebook)
  //       // console.log(this.settings.contacts_twitter)
  //     });
  //   },
  // },
};
</script>
<style lang="scss" scoped>
// .is-rtl .landing-page .landing-lang {
//   @apply border-l border-r-0;
// }
// .is-rtl .landing-page .landing-social {
//   @apply border-l border-r-0;
// }
</style>
