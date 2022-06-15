<template>
  <div class="image-box grid gap-8" v-if="gallary">
    <div
      class="image-holder rounded overflow-hidden cursor-pointer relative"
      v-for="galary in gallary"
      :class="scrollGallary ? 'reset' : ''"
      :key="galary.id"
    >
      <img class="w-full" :src="galary.src" :alt="galary.alt" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["gallary"],
  data() {
    return {
      scrollGallary: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      let gallary = document.querySelector(".gallary");
      if (window.scrollY >= gallary.offsetTop - 500) {
        return (this.scrollGallary = true);
      }
      return (this.scrollGallary = false);
    },
  },
};
</script>
<style lang="scss">
.image-holder {
  transform: rotateY(90deg);
  &.reset {
    transition: 0.8s;
    transform: rotateY(0);
  }
}
</style>
