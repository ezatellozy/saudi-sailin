<template>
  <section>
    <loading v-if="loading" />
    <div class="relative container mx-auto">
      <small-card v-if="items">
        <!-- <validation-observer v-slot="{ invalid }" ref="profileUpdate">
          <div class="form-input">
            <validation-provider
              name="English name"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <input
                  type="text"
                  name="English name"
                  v-model="nameEn"
                  :placeholder="$t('inputs.english_name')"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="Arabic name"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <input
                  type="text"
                  name="Arabic name"
                  v-model="nameAr"
                  :placeholder="$t('inputs.arabic_name')"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="birthdate"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'calendar']" />
                <datepicker
                  v-model="birthdate"
                  name="birthdate"
                  :placeholder="$t('inputs.birthdate')"
                  :format="customFormatter"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="gender"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <v-select
                  name="gender"
                  :placeholder="$t('inputs.gender')"
                  :options="genderList"
                  v-model="gender"
                ></v-select>
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="nationality"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <input
                  type="text"
                  name="nationality"
                  v-model="nationality"
                  :placeholder="$t('inputs.nationality')"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>

          <div class="form-input">
            <validation-provider
              name="identity number"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <input
                  type="number"
                  name="identity number"
                  v-model="identityNumber"
                  :placeholder="$t('inputs.identity_number')"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="identity_type"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <input
                  type="text"
                  name="identity type"
                  v-model="identityType"
                  :placeholder="$t('inputs.identity_type')"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="form-input">
            <validation-provider
              name="identity expiry"
              rules="required|min:3|max:80"
              v-slot="v"
            >
              <div class="group">
                <font-awesome-icon class="icon" :icon="['far', 'user']" />
                <datepicker
                  v-model="identityExpiry"
                  @selected="customFormatter($event, 'identityExpiry')"
                  name="identity expiry"
                  :placeholder="$t('inputs.identity_expiry')"
                  :format="customFormatter"
                />
              </div>
              <p class="text-red-500 flex mx-auto">
                {{ v.errors[0] }}
              </p>
            </validation-provider>
          </div>
          <div class="flex justify-center">
            <button
              class="border rounded-xl px-4 py-2 font-bold text-lg bg-secondary text-white border-secondary"
              :class="{
                'cursor-default': invalid,
              }"
              :disabled="invalid"
              @click="updateProfile"
            >
              {{ $t("buttons.update_profile") }}
            </button>
          </div>
        </validation-observer> -->
      </small-card>
    </div>
  </section>
</template>

<script>
// import { BRow, BCol, BFormGroup, BFormInput } from "bootstrap-vue";

// import { FormWizard, TabContent } from "vue-form-wizard";
// import { BCardText } from "bootstrap-vue";
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Loading from '../components/Loading.vue'
// import Datepicker from 'vuejs-datepicker'
export default {
  components: { Loading },
  name: 'Profile',
  data() {
    return {
      loading: false,
      items: null,
      file_portrait: null,
      nameAr: '',
      nameEn: '',
      birthdate: '',
      gender: '',
      nationality: '',
      identityNumber: '',
      identityType: '',
      identityExpiry: '',
      preview: null,
      identity_file: '',
      genderList: ['Male', 'Female'],
    }
  },
  mounted() {
    this.fetchProfile()
    this.fetchPortrait()
  },
  methods: {
    fetchPro() {
      this.axios
        .get(`users-applications/new-application/athletes-membership`)
        .then((data) => {
          console.log(data)
        })
    },
    fetchProfile() {
      this.loading = true
      this.items = false
      this.axios
        .get(`users/get-profile`)
        .then((data) => {
          let dataProfile = data.data.profile
          if (dataProfile.length != 0) {
            this.nameAr = dataProfile.name_ar
            this.nameEn = dataProfile.name_en
            this.birthdate = dataProfile.birthdate
            this.gender = dataProfile.gender
            this.nationality = dataProfile.nationality
            this.identityNumber = dataProfile.identity_number
            this.identityType = dataProfile.identity_type
            this.identityExpiry = dataProfile.identity_expiry
          }
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.$router.replace('/login')
          }
        })
        .finally(() => {
          this.items = true
          this.loading = false
        })
    },

    fetchPortrait() {
      this.axios.get(`users/get-portrait`).then((data) => {
        console.log(data)
      })
    },
    uploadPortrait() {
      this.loading = true
      let requestFormData = new FormData()

      requestFormData.append('portrait_file', this.file_portrait)
      this.axios
        .post(`users/update-portrait`, requestFormData)
        .then(() => {
          this.loading = false
          this.$refs.profileUpdate.reset()
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    },
    updateProfile() {
      this.loading = true
      let requestFormData = new FormData()

      requestFormData.append('name_ar', this.nameAr)
      requestFormData.append('name_en', this.nameEn)
      requestFormData.append('birthdate', this.customFormatter(this.birthdate))
      requestFormData.append('gender', this.gender)
      requestFormData.append('nationality', this.nationality)

      requestFormData.append('identity_number', this.identityNumber)
      requestFormData.append('identity_type', this.identityType)
      requestFormData.append(
        'identity_expiry',
        this.customFormatter(this.identityExpiry),
      )

      this.axios
        .post(`users/update-profile`, requestFormData)
        .then(() => {
          this.loading = false
          this.$refs.profileUpdate.reset()
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    },
    customFormatter(d) {
      let date = new Date(d)
      let day = '' + date.getDate()
      let month = '' + (date.getMonth() + 1)
      let year = date.getFullYear()

      if (day.length < 2) {
        day = `0${day}`
      }
      if (month.length < 2) {
        month = `0${month}`
      }
      return `${year}-${month}-${day}`
    },
    previewMainMedia(event) {
      if (event.target.files.length !== 0) {
        this.file_portrait = event.target.files[0]
        this.preview = URL.createObjectURL(this.file_portrait)
      }
    },
  },
}
</script>
<style lang="scss">
.image-holder {
  width: 200px;
  height: 150px;
}
.form-input {
  margin-bottom: 10px;
  .group {
    .vs__selected {
      position: absolute;
      top: 10px;
      left: 30px;
      right: unset;
    }
    position: relative;
    .vs__dropdown-toggle {
      position: relative;
      cursor: pointer;
      border: none;
    }
    .vs__search {
      color: gray !important;
    }
    input {
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
      z-index: 10;
    }
  }
  .custom-file {
    @apply border border-primary rounded-lg py-2 px-4;

    font-size: 12px;
    .custom-file-label {
      display: none;
    }
  }
}

.is-rtl {
  .group {
    .vs__dropdown-toggle {
      flex-direction: row-reverse;
    }
    .vs__selected {
      left: unset;
      right: 30px;
    }
    input {
      padding: 10px 35px 10px 20px;
    }
    .icon {
      right: 10px;
    }
  }
}
</style>
