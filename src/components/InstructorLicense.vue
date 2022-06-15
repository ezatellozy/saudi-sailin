<template>
  <section>
    <div class="relative container mx-auto">
      <base-card>
        <loading v-if="loading" />
        <!-- <form-wizard
          v-if="items"
          color="#FFA408"
          :title="null"
          :subtitle="null"
          layout="vertical"
          finish-button-text="Submit"
          :next-button-text="$t('buttons.next')"
          :back-button-text="$t('buttons.previous')"
          class="wizard-vertical mb-3"
          @on-complete="updateProfile"
        >
          <tab-content
            :title="$t('misc.personal_informartion')"
            icon="feather icon-info"
            @beforeChange="updateProfile"
          >
            <validation-observer v-slot="{}" ref="profileUpdate">
              <div class="form-input">
                <validation-provider
                  name="English name"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="group">
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />

                    <input
                      type="text"
                      name="birthdate"
                      v-model="birthdate"
                      :placeholder="$t('inputs.birthdate')"
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
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
                  name="identity_expiry"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="group">
                    <font-awesome-icon class="icon" :icon="['fas', 'user']" />
                    <input
                      type="text"
                      name="identity expiry"
                      v-model="identityExpiry"
                      :placeholder="$t('inputs.identity_expiry')"
                    />
                  </div>
                  <p class="text-red-500 flex mx-auto">
                    {{ v.errors[0] }}
                  </p>
                </validation-provider>
              </div>
            </validation-observer>
          </tab-content>

          <tab-content
            :title="$t('misc.personal_picture')"
            icon="feather icon-image"
            @beforeChange="uploadPortrait"
          >
            <validation-observer v-slot="{}">
              <div class="form-input">
                <validation-provider
                  name="file_portrait"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="image-holder mx-auto mb-4" v-if="file_portrait">
                    <img class="w-full h-full" :src="preview" alt="image" />
                  </div>
                  <b-form-file
                    @change="previewMainMedia($event)"
                    name="file_portrait"
                    v-model="file_portrait"
                    :placeholder="'inputs.chooseafileordropithere'"
                    drop-placeholder="Drop file here..."
                  />

                  <b-card-text class="text-sm text-primary my-1">
                    <strong>{{
                      file_portrait ? file_portrait.name : ""
                    }}</strong>
                  </b-card-text>
                  <p class="text-red-500 flex mx-auto">
                    {{ v.errors[0] }}
                  </p>
                </validation-provider>
              </div>
            </validation-observer>
          </tab-content>
          <tab-content
            :title="$t('misc.qualifications')"
            icon="feather icon-file-text"
          >
            <validation-observer v-slot="{}">
              <div class="form-input">
                <validation-provider
                  name="qualification"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="group">
                   
                    <input
                      type="text"
                      name="qualification"
                      v-model="qualificationTitle"
                      :placeholder="$t('inputs.qualification')"
                    />
                  </div>
                  <p class="text-red-500 flex mx-auto">
                    {{ v.errors[0] }}
                  </p>
                </validation-provider>
              </div>
              <div class="form-input">
                <validation-provider
                  name="qualification orgnization"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="group">
                    <input
                      type="text"
                      name="qualification orgnization"
                      v-model="qualificationOrg"
                      :placeholder="$t('inputs.qualification_orgnization')"
                    />
                  </div>
                  <p class="text-red-500 flex mx-auto">
                    {{ v.errors[0] }}
                  </p>
                </validation-provider>
              </div>
              <div class="form-input">
                <validation-provider
                  name="file_portrait"
                  rules="required|min:3|max:80"
                  v-slot="v"
                >
                  <div class="image-holder mx-auto mb-4" v-if="file_portrait">
                    <img class="w-full h-full" :src="preview" alt="image" />
                  </div>
                  <b-form-file
                    @change="previewMainMedia($event)"
                    name="file_portrait"
                    v-model="file_portrait"
                    :placeholder="'inputs.chooseafileordropithere'"
                    drop-placeholder="Drop file here..."
                  />

                  <b-card-text class="text-sm text-primary my-1">
                    <strong>{{
                      file_portrait ? file_portrait.name : ""
                    }}</strong>
                  </b-card-text>
                  <p class="text-red-500 flex mx-auto">
                    {{ v.errors[0] }}
                  </p>
                </validation-provider>
              </div>
            </validation-observer>
          </tab-content>
        </form-wizard> -->
      </base-card>
    </div>
  </section>
</template>

<script>
// import { BRow, BCol, BFormGroup, BFormInput } from "bootstrap-vue";

// import { FormWizard, TabContent } from "vue-form-wizard";
// import { BFormFile, BCardText } from "bootstrap-vue";
// import "vue-form-wizard/dist/vue-form-wizard.min.css";
import Loading from '../components/Loading.vue'
export default {
  // components: { FormWizard, TabContent, BFormFile, BCardText, Loading },
  components: { Loading },
  name: 'InstructorLicense',
  data() {
    return {
      loading: false,
      items: null,
      applicationStatus: {
        id: null,
        stage: null,
        progress: {
          portraitConfirmation: '',
          profileConfirmation: '',
          qualificationConfirmation: '',
        },
      },
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
      qualificationTitle: '',
      qualificationOrg: '',
      genderList: ['Male', 'Female'],
    }
  },
  mounted() {
    this.fetchProfile()
    this.fetchPortrait()
    this.getApplicationId()
    this.fetchPro()
  },
  methods: {
    getApplicationId() {
      this.axios.get('/users-applications/').then((data) => {
        let requests = data.data.requests
        for (let i = 0; i < requests.length; i += 1) {
          if (requests[i].purpose === 'New Athletes Memberships') {
            console.log('New Athletes Memberships :', requests[i].id)
          } else if (requests[i].purpose === 'New Instructor License') {
            console.log('New Instructor License :', requests[i].id)
          }
        }
        // console.log(data);
        this.applicationStatus.id = data.requests.id
      })
    },

    fetchPro() {
      this.axios
        .get(`users-applications/new-application/instructor-license`)
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
        .finally(() => {
          this.items = true
          this.loading = false
        })
    },
    fetchPortrait() {
      this.axios.get(`users/get-portrait`).then(() => {
        // console.log(data);
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
        .catch(() => {
          // console.log(err);
          this.loading = false
        })
    },
    updateProfile() {
      this.loading = true
      let requestFormData = new FormData()

      requestFormData.append('name_ar', this.nameAr)
      requestFormData.append('name_en', this.nameEn)
      requestFormData.append('birthdate', this.birthdate)
      requestFormData.append('gender', this.gender)
      requestFormData.append('nationality', this.nationality)

      requestFormData.append('identity_number', this.identityNumber)
      requestFormData.append('identity_type', this.identityType)
      requestFormData.append('identity_expiry', this.identityExpiry)

      this.axios
        .post(`users/update-profile`, requestFormData)
        .then(() => {
          this.loading = false
          this.$refs.profileUpdate.reset()
        })
        .catch(() => {
          // console.log(err);
          this.loading = false
        })
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
