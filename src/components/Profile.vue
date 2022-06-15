<template>
  <div class="relative">
    <div class="avatar" @click="profileMenu = !profileMenu">
      <img v-if="avatar" class="w-full" src="@/assets/member.png" alt="" />
      <span class="font-bold" v-else>{{ initialName }}</span>
    </div>
    <div
      @click="profileMenu = !profileMenu"
      v-show="profileMenu"
      class="profile-menu bg-primary"
      :class="$i18n.locale == 'en' ? 'left-0' : 'right-0'"
    >
      <div class="info">
        <p class="initials">{{ initialName }}</p>
        <div class="right text-left">
          <p>{{ name }}</p>
          <p>{{ email }}</p>
        </div>
      </div>
      <div class="options">
        <div class="option">
          <router-link class="option" :to="{ name: 'Profile' }">
            <font-awesome-icon :icon="['fas', 'user']" />
            <p>Profile</p>
          </router-link>
        </div>
        <div @click="signOut" class="option">
          <font-awesome-icon :icon="['fas', 'door-open']" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: false,
      profileMenu: null,
    };
  },
  methods: {
    signOut() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      window.location.reload();
    },
  },

  computed: {
    initialName() {
      return (
        JSON.parse(sessionStorage.getItem("user"))
          .name.match(/(\b\S)?/g)
          .join("")
          .toUpperCase() || ""
      );
    },
    email() {
      return JSON.parse(sessionStorage.getItem("user")).email;
    },
    name() {
      return JSON.parse(sessionStorage.getItem("user")).name;
    },
  },
};
</script>

<style lang="scss">
.avatar {
  @apply relative cursor-pointer flex items-center justify-center rounded-full bg-white text-secondary;
  width: 40px;
  height: 40px;
}
.profile-menu {
  position: absolute;
  top: calc(100% + 5px);

  width: 250px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  .info {
    @apply text-secondary;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;
    .initials {
      position: initial;
      width: 40px;
      height: 40px;
      background-color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    .right {
      flex: 1;
      margin-left: 24px;
      p:nth-child(1) {
        font-size: 14px;
      }
      p:nth-child(2),
      p:nth-child(3) {
        font-size: 12px;
      }
    }
  }
  .options {
    padding: 15px;
    .option {
      text-decoration: none;
      color: #fff;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .icon {
        width: 18px;
        height: auto;
      }
      p {
        @apply mx-2 text-sm;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
