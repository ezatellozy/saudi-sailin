<template>
  <div class="articles cards grid gap-8" v-if="articles">
    <div
      class="card"
      :class="scrollArticles ? 'reset' : ''"
      v-for="article in articles"
      :key="article.id"
    >
      <img
        class="card-img-top"
        v-if="article.src"
        src="../assets/card1.png"
        alt=""
      />
      <div class="card-body bg-white p-2 relative">
        <h3 class="card-title text-lg text-secondary font-bold">
          {{ article.title }}
        </h3>
        <p class="text-primary pb-5">
          {{ article.description }}
        </p>
        <router-link to="/" hidden class="btn">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  data() {
    return {
      scrollArticles: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.checkScroll);
  },
  methods: {
    checkScroll() {
      let articles = document.querySelector(".articles.cards");
      if (window.scrollY >= articles.offsetTop - 600) {
        return (this.scrollArticles = true);
      }
      return (this.scrollArticles = false);
    },
  },
};
</script>
<style lang="scss">
.articles {
  .card {
    transform: rotateY(90deg);
    &.reset {
      transition: 0.8s;
      transform: rotateY(0);
    }
  }
}
</style>
