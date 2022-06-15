<template>
  <div class="landing flex flex-wrap justify-between">
    <div
      class="order-2 fadeInLeft md:order-1 info-text px-2 my-auto w-3/4 md:w-1/4"
    >
      <h2
        class="text-secondary font-bold tracking-tighter sm:text-3xl md:text-2xl lg:text-3xl"
      >
        {{ $t("misc.langingHeader") }}
      </h2>
      <p class="text-third leading-7 pt-4">{{ $t("misc.langingDesc") }}</p>
    </div>
    <div class="md:order-1 image w-full flex justify-end md:w-3/4 md:flex-1">
      <img src="../assets/landing.png" alt="landing" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.is-rtl {
  .landing {
    .image {
      img {
        transform: scaleX(-1);
      }
    }
  }
}
</style>
