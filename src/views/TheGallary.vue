<template>
  <section class="gallary py-10" v-if="gallary.length">
    <h3 class="text-center text-primary mb-11 text-3xl font-bold">
      {{ $t("misc.gallary") }}
    </h3>
    <div class="container mx-auto">
      <gallary :gallary="gallary" />
    </div>
  </section>
</template>
<script>
import Gallary from "../components/Gallary.vue";
export default {
  props: ["gallary"],
  components: {
    Gallary,
  },
};
</script>
<style lang="scss" scoped>
.gallary {
  min-height: calc(100vh - 3rem);
}
</style>
