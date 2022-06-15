<template>
  <section class="about">
    <!-- {{ galleries }} -->
    <div class="our-history pb-10 flex justify-between flex-wrap items-center">
      <div class="image basis-1/2 order-1">
        <img class="w-full" src="../assets/about.png" alt="Our history" />
      </div>
      <div
        class="info basis-1/2 flex justify-center px-4 flex-col"
        :class="this.$i18n.locale === 'en' ? 'text-left' : 'text-right'"
      >
        <h3 class="font-bold text-2xl text-primary pb-5 m-0">
          {{ $t("misc.aboutFederation") }}
        </h3>
        <p class="leading-6 mt-2 text-primary text-sm font-bold">
          {{ $t("misc.aboutFederationDescription") }}
        </p>
      </div>
    </div>

    <div class="about-federation" v-if="false">
      <div class="text">
        <h3>{{ $t("misc.aboutFederation") }}</h3>
        <p>
          {{ $t("misc.aboutFederationDescription") }}
        </p>
      </div>
    </div>

    <div class="message">
      <div class="container mx-auto">
        <!-- <div class="our-message">
          <img src="../assets/vision.png" alt="vision" />
          <div class="text">
            <h4>Our vision</h4>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. .when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div> -->
        <div class="our-message">
          <img class="mx-auto" src="../assets/mission.png" alt="mission" />
          <div class="text">
            <h4>{{ $t("misc.mission") }}</h4>
            <p class="text-lg md:text-xl xl:text-2xl">
              {{ $t("misc.missionDescription") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="members-container">
      <members />
    </div>
  </section>
</template>

<script>
import Members from "../views/Members.vue";
export default {
  components: {
    Members,
  },
};
</script>
