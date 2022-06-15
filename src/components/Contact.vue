<template>
  <section>
    <div class="contact-us relative">
      <img src="../assets/header-bg1.svg" alt="" />
      <h3 class="text-primary font-bold text-center my-5 text-lg md:text-xl">
        Contact us
      </h3>
      <small-card>
        <div class="p-4">
          <validation-observer v-slot="{ invalid }">
            <div class="form-input">
              <validation-provider
                name="name"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    placeholder="Your Name"
                  />
                </div>
                <p class="text-red-500 flex mx-auto">
                  {{ v.errors[0] }}
                </p>
              </validation-provider>
            </div>
            <div class="form-input">
              <validation-provider
                name="email"
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
                name="subject"
                rules="required|min:3|max:80"
                v-slot="v"
              >
                <div class="group">
                  <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
                  <input
                    type="text"
                    name="subject"
                    v-model="subject"
                    placeholder="Your subject"
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
                  <textarea
                    type="text"
                    name="message"
                    v-model="message"
                    placeholder="Type Your Message"
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
                {{ $t("buttons.send") }}
              </button>
            </div>
          </validation-observer>
        </div>
      </small-card>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    submit() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
<style scoped lang="scss">
.form-input {
  margin-bottom: 10px;
  .group {
    position: relative;
    input,
    textarea {
      margin-bottom: 5px;
      border-radius: 10px;
      padding: 10px 20px 10px 35px;
      @apply border border-primary;
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
