<template>
  <div class="settings flex justify-between flex-wrap">
    <div class="side-menu w-full md:w-1/4 px-2">
      <base-card>
        <router-link class="link" :to="{ name: 'Profile' }">
          {{ $t('misc.personal_informartion') }}
        </router-link>
      </base-card>
      <base-card>
        <router-link class="link" :to="{ name: 'AthletesMembership' }">
          {{ $t('misc.athletes_membership') }}
        </router-link>
      </base-card>
      <base-card>
        <router-link class="link" :to="{ name: 'InstructorLicense' }">
          {{ $t('misc.instructor_license') }}
        </router-link>
      </base-card>
    </div>
    <div class="content w-full md:w-3/4 flex-1 px-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue'
export default {
  components: { BaseCard },
}
</script>

<style lang="scss">
.settings {
  .side-menu {
    .card {
      margin: 10px auto;
      padding: 0;
      // @apply flex items-center justify-center border border-primary overflow-hidden;
      .link {
        // @apply text-center w-full text-primary p-4 font-bold text-lg hover:bg-primary hover:text-white;
        transition: 0.3s all;
      }
    }
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: 250px;
    margin: 2rem auto;
    border-radius: 10px;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  .router-link-exact-active.router-link-active {
    // @apply bg-primary;
    color: white !important;
  }
}
</style>
