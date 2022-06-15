<template>
  <section class="events-container">
    <div class="events" v-if="articles.length">
      <div class="image">
        <img src="../assets/last-event.png" alt="" />
      </div>
      <div class="event-info">
        <div class="title">
          <h3>{{ articles[articles.length - 1].title }}</h3>
          <span></span>
        </div>
        <p class="description">
          {{ articles[articles.length - 1].description }}
        </p>
        <router-link class="btn" to="/events">Read Now</router-link>
      </div>
    </div>
    <div class="all-event pb-11">
      <img src="../assets/bgnews2.png" alt="events" />
      <h3 class="text-center text-primary text-2xl font-bold pb-10">
        All events
      </h3>
      <div class="container mx-auto" v-if="articles.length">
        <div class="road-map">
          <div class="map" v-for="article in articles" :key="article.id">
            <div class="event bg-gray p-2">
              <div class="title">
                <h3 class="text-2xl text-secondary font-bold pb-3">
                  {{ article.title }}
                </h3>
              </div>
              <p class="text-primary text-sm font-bold leading-7">
                {{ article.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          id: "1",
          src: "images/card1.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "2",
          src: "images/card2.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "3",
          src: "images/card3.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "4",
          src: "images/card4.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "5",
          src: "images/card1.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "6",
          src: "images/card2.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "7",
          src: "images/card3.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "8",
          src: "images/card4.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "9",
          src: "images/card1.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "10",
          src: "images/card2.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "11",
          src: "images/card3.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "12",
          src: "images/card4.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "13",
          src: "images/card1.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "14",
          src: "images/card2.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "15",
          src: "images/card3.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          id: "16",
          src: "images/card4.png",
          alt: "Card image cap",
          title: "Article Full Title",
          description:
            "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.all-event {
  background-image: url("../assets/bgnews1.png");
  background-size: cover;
  position: relative;
  background-position: top center;
  & > img {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: -61px;
    width: 100%;
    height: 61px;
  }
}
</style>
