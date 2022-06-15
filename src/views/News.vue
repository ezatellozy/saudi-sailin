<template>
  <section class="news" v-if="articles.length">
    <h3 class="text-center text-primary py-8 text-3xl font-bold">
      {{ $t("misc.news") }}
    </h3>
    <div class="container mx-auto">
      <CardNews :articles="articles" />

      <router-link
        class="read-more block text-primary font-bold mx-auto"
        to="/"
        >{{ $t("buttons.readMore") }}</router-link
      >
    </div>
  </section>
</template>

<script>
import CardNews from "../components/NewsCard.vue";
export default {
  props: ["articles"],
  components: {
    CardNews,
  },
};
</script>
<style lang="scss" scoped>
.news {
  background-image: url("../assets/newsBack.svg");
  background-size: cover;
  background-position: center top;
  @apply pt-10 pb-10;
  .read-more {
    border: 2px solid #1e3002;
    border-radius: 10px;
    padding: 10px 20px;
    width: fit-content;
    &:hover {
      @apply bg-primary;
      color: white;
      transition: 0.3s;
    }
  }
}
</style>
