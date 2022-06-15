<template>
  <section class="kits">
    <div class="sailing">
      <div class="image" :class="scrollSailing ? 'fadeInLeft' : ''">
        <img src="../assets/2.svg" alt="sailing" />
      </div>
      <div class="info-text" :class="scrollSailing ? 'fadeInRight' : ''">
        <h2>{{ $t("misc.sailing") }}</h2>
        <p>{{ $t("misc.sailingdesc") }}</p>
        <router-link class="btn" to="/contact-us">
          {{ $t("buttons.sailing") }}
        </router-link>
      </div>
    </div>

    <!-- kite sailor -->
    <div class="kite-sailor">
      <div class="image" :class="scrollSailor ? 'fadeInLeft' : ''">
        <img src="../assets/1.png" alt="kite Serving" />
      </div>
      <div class="info-text" :class="scrollSailor ? 'fadeInRight' : ''">
        <h2>{{ $t("misc.windsurfing") }}</h2>
        <p>{{ $t("misc.windsurfingdesc") }}</p>
        <router-link class="btn" to="/contact-us">
          {{ $t("buttons.becomewindsurfing") }}
        </router-link>
      </div>
    </div>
    <!-- kite sailor -->
    <div class="about-us" id="about-us">
      <div class="image" :class="scrollAboutUs ? 'fadeInRight' : ''">
        <img src="../assets/3.svg" alt="kite Serving" />
      </div>
      <div
        class="info-text"
        :class="[
          scrollAboutUs ? 'fadeInLeft ' : '',
          this.$i18n.locale === 'en' ? 'text-left' : 'text-right',
        ]"
      >
        <h2>{{ $t("misc.aboutFederation") }}</h2>
        <p>
          {{ $t("misc.aboutFederationDescription") }}
        </p>
        <router-link class="btn" to="/about">
          {{ $t("buttons.readMore") }}
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeRoute: false,
      scrollSailor: false,
      scrollSailing: false,
      scrollAboutUs: false,
    };
  },
  created() {
    // window.addEventListener("scroll", this.checkScroll);
    // this.checkRoute();
  },
  watch: {
    // $route() {
    //   this.checkRoute();
    // },
  },
  methods: {
    // checkRoute() {
    //   console.log(this.$route.name);
    //   if (this.$route.name === "Home") {
    //     this.activeRoute = true;
    //   }
    // },
    // checkScroll() {
    //   let sailing = document.querySelector(".sailing");
    //   let kiteSailor = document.querySelector(".kite-sailor");
    //   let aboutUs = document.querySelector(".about-us");
    //   if (this.activeRoute) {
    //     if (window.scrollY >= kiteSailor.offsetTop - 600) {
    //       this.scrollSailor = true;
    //     } else {
    //       this.scrollSailor = false;
    //     }
    //     if (window.scrollY >= aboutUs.offsetTop - 600) {
    //       this.scrollAboutUs = true;
    //     } else {
    //       this.scrollAboutUs = false;
    //     }
    //     if (window.scrollY >= sailing.offsetTop - 600) {
    //       this.scrollSailing = true;
    //     } else {
    //       this.scrollSailing = false;
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss">
.kite-serving,
.sailing,
.about-us,
.kite-sailor {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-bottom: 50px;
}

.kite-sailor {
  flex-direction: row-reverse;
}
.kite-serving .image,
.sailing .image,
.about-us .image,
.kite-sailor .image {
  flex-basis: 50%;
}
.kite-serving .image img,
.sailing .image img,
.about-us .image img,
.kite-sailor .image img {
  flex-basis: 50%;
}

.kite-sailor .image img {
  transform: scalex(-1);
}
.sailing .image img {
  transform: scalex(-1);
}

.kite-serving .info-text,
.about-us .info-text,
.sailing .info-text,
.kite-sailor .info-text {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-text {
  padding: 0 30px;
}
.info-text h2 {
  @apply text-2xl;
  color: #ffa408;
  font-weight: bold;
  margin: 0;
}
.info-text p {
  line-height: 1.7;
  margin-top: 30px;
  color: #1e3002;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.info-text .btn {
  background: transparent;
  border: 2px solid #ffa408;
  color: #ffa408;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 10px;
  transition: 0.3;
  width: fit-content;
}
.info-text .btn:hover {
  background-color: #ffa408;
  color: white;
}
.about-us .info-text h2 {
  color: var(--main-color);
}
.about-us .info-text p {
  color: var(--second-color);
}
.about-us .info-text button {
  border: 2px solid var(--main-color);
  color: var(--main-color);
}
.about-us .info-text button:hover {
  background-color: var(--main-color);
  color: white;
}
@media (max-width: 768px) {
  .kite-serving,
  .about-us,
  .sailing,
  .kite-sailor {
    padding: 30px 0;
  }
  .kite-serving .image,
  .about-us .image,
  .sailing .image,
  .kite-sailor .image {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
  .kite-serving .info-text,
  .about-us .info-text,
  .sailing .info-text,
  .kite-sailor .info-text {
    flex-basis: 100%;
    align-items: center;
    text-align: center;
  }
  .info-text p {
    margin: 15px 0;
  }
}
.is-rtl {
  .kite-sailor .image img,
  .sailing .image img {
    transform: scalex(1);
  }

  .about-us .image img {
    transform: scalex(-1);
  }
}
</style>
