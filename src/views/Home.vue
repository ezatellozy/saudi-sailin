<template>
  <div class="home--page">
    <landing />
    <kits />
    <the-gallary :gallary="gallaryInfo" />
    <news :articles="articles" />
    <members />
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
import Kits from "../components/Kits.vue";
import News from "../views/News.vue";
import Members from "../views/Members.vue";
import TheGallary from "./TheGallary.vue";

export default {
  components: {
    Landing,
    Kits,
    News,
    Members,
    TheGallary,
  },
  data() {
    return {
      articles: [],
      gallaryInfo: [],
      // articles: [
      //   {
      //     id: "1",
      //     src: "../assets/card1.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "2",
      //     src: "images/card2.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "3",
      //     src: "images/card3.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "4",
      //     src: "images/card4.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "5",
      //     src: "images/card1.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "6",
      //     src: "images/card2.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "7",
      //     src: "images/card3.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      //   {
      //     id: "8",
      //     src: "images/card4.png",
      //     alt: "Card image cap",
      //     title: "Article Full Title",
      //     description:
      //       "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      //   },
      // ],
      // gallaryInfo: [
      //   {
      //     id: "1",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 1",
      //   },
      //   {
      //     id: "2",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 2",
      //   },
      //   {
      //     id: "3",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 3",
      //   },
      //   {
      //     id: "4",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 4",
      //   },
      //   {
      //     id: "5",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 5",
      //   },
      //   {
      //     id: "6",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 6",
      //   },
      //   {
      //     id: "7",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 7",
      //   },
      //   {
      //     id: "8",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 8",
      //   },
      //   {
      //     id: "9",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 9",
      //   },
      //   {
      //     id: "10",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 9",
      //   },
      //   {
      //     id: "11",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/URrNdhy1wi0Kr2SRfqra.jpeg",
      //     alt: "Gallary 9",
      //   },
      //   {
      //     id: "12",
      //     src: "https://api.saadaahnews.com/storage/photos/galleries/s4PJIhnxQgNgmp3cvz3M.jpeg",
      //     alt: "Gallary 9",
      //   },
      // ],
    };
  },
};
</script>
