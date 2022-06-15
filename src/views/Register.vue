<template>
  <section>
    <div class="relative">
      <small-card>
        <h3 class="text-primary font-bold text-center my-5 text-lg md:text-xl">
          Create an Account
        </h3>
        <div class="p-4">
          <validation-observer v-slot="{ invalid }">
            <div class="form-input">
              <validation-provider
                name="user_name"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                  <input
                    type="text"
                    name="user_name"
                    v-model="userName"
                    placeholder="User Name"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="form-input">
              <validation-provider
                name="name"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="form-input">
              <validation-provider
                name="name"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                  <input
                    type="phone"
                    name="phone"
                    v-model="phone"
                    placeholder="Phone"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="form-input">
              <validation-provider
                name="password"
                ref="password"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="Password"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="form-input">
              <validation-provider
                name="confirm_password"
                rules="required|min:3|max:80|confirmed:password"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'lock']" />
                  <input
                    type="password"
                    name="confirm_password"
                    v-model="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="flex mt-11 justify-center">
              <button
                class="border rounded-xl px-4 py-2 font-bold text-lg bg-primary text-white border-primary"
                :class="{
                  'cursor-default': invalid,
                }"
                @click="register()"
                :disabled="invalid"
              >
                Register
              </button>
            </div>
          </validation-observer>
        </div>
        <div class="flex justify-center mt-4 text-center font-bold text-sm">
          <p class="text-primary mx-2">Already have an account?</p>
          <a class="text-secondary" href="/login">Sign in Instead</a>
        </div>
      </small-card>
    </div>
  </section>
</template>

<script>
// import BaseCard from "../ui/BaseCard.vue";
export default {
  // components: { BaseCard },
  name: 'Register',
  data() {
    return {
      userName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    }
  },

  methods: {
    register() {
      const data = new FormData()
      data.append('name', this.userName)
      data.append('email', this.email)
      data.append('password', this.password)
      data.append('mobile', this.phone)

      this.axios
        .post('https://ssf.almotamayiz.com/api/users/signup', data)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped lang="scss">
.form-input {
  margin-bottom: 10px;
  .group {
    position: relative;
    input {
      margin-bottom: 5px;
      border-radius: 10px;
      padding: 10px 20px 10px 35px;
      // @apply border border-primary;
      width: 100%;
    }
    .icon {
      position: absolute;
      top: 15px;
      left: 10px;
      color: #416f09;
      font-size: 20px;
    }
  }
}

.is-rtl {
  .group {
    input {
      padding: 10px 35px 10px 20px;
    }
    .icon {
      right: 10px;
    }
  }
}
</style>
