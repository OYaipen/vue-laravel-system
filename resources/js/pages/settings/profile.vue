<template>
  <card :title="$t('your_info')" class="border-left-primary">
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <!-- photo -->
      <div class="form-group row">
        <div class="col-sm-4 text-md-right">
          <img :src="user.photo_url" class="img-profile rounded-circle" width="50" />
          <div class="col-sm-1"></div>
        </div>
        <label class="col-sm-6 col-form-label text-gray-600">{{ user.name }}</label>
      </div>
      <!-- Name -->
      <div class="form-group row">
        <label for="inputName" class="col-sm-4 col-form-label text-md-right">{{ $t('name') }}:</label>
        <div class="col-sm-6">
          <input
            v-model="form.name"
            :class="{ 'is-invalid': form.errors.has('name') }"
            class="form-control"
            type="text"
            name="name"
            id="inputName"
          />
          <has-error :form="form" field="name" />
          <div class="col-sm-1"></div>
        </div>
      </div>
      <!-- Email -->
      <div class="form-group row">
        <label for="inputEmail" class="col-sm-4 col-form-label text-md-right">{{ $t('email') }}:</label>
        <div class="col-sm-6">
          <input
            v-model="form.email"
            :class="{ 'is-invalid': form.errors.has('email') }"
            class="form-control"
            type="email"
            name="email"
            id="inputEmail"
          />
          <has-error :form="form" field="email" />
          <div class="col-sm-1"></div>
        </div>
      </div>
      <!-- Bio -->
      <div class="form-group row">
        <label for="inputBio" class="col-sm-4 col-form-label text-md-right">{{$t('biography')}}:</label>
        <div class="col-sm-6">
          <textarea
            v-model="form.bio"
            class="form-control"
            id="inputBio"
            :placeholder="$t('biography')"
            rows="4"
            :class="{ 'is-invalid': form.errors.has('bio') }"
          ></textarea>
          <has-error :form="form" field="bio"></has-error>
          <div class="col-sm-1"></div>
        </div>
      </div>
      <!-- Phone -->
      <div class="form-group row">
        <label for="inputPhone" class="col-sm-4 col-form-label text-md-right">{{$t('phone')}}:</label>
        <div class="col-sm-6">
          <input
            v-model="form.phone"
            class="form-control"
            id="inputPhone"
            :placeholder="$t('phone')"
            rows="4"
            :class="{ 'is-invalid': form.errors.has('phone') }"
          />
          <has-error :form="form" field="phone"></has-error>
          <div class="col-sm-1"></div>
        </div>
      </div>
      <!-- Gender -->
      <div class="form-group row">
        <label for="inputPhone" class="col-sm-4 col-form-label text-md-right">{{$t('gender')}}:</label>
        <div class="col-sm-6">
          <input
            v-model="form.gender"
            class="form-control"
            id="inputPhone"
            :placeholder="$t('gender')"
            rows="4"
            :class="{ 'is-invalid': form.errors.has('gender') }"
          />
          <has-error :form="form" field="gender"></has-error>
          <div class="col-sm-1"></div>
        </div>
      </div>
      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-sm-4 col-form-label text-md-right"></div>
        <div class="col-sm-6">
          <v-button :loading="form.busy" type="primary">{{ $t('update') }}</v-button>
        </div>
      </div>
    </form>
  </card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  layout: "dashboard",
  scrollToTop: false,

  metaInfo() {
    return { title: this.$t("profile") };
  },

  data: () => ({
    form: new Form({
      bio: "",
      name: "",
      email: "",
      phone: "",
      gender: ""
    })
  }),

  computed: mapGetters({
    user: "auth/user"
  }),

  created() {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key];
    });
  },

  methods: {
    async update() {
      const { data } = await this.form.patch("/api/settings/profile");

      this.$store
        .dispatch("auth/updateUser", { user: data })
        .then(() => {
          Fire.$emit("AfterCreate");
          toast.fire({
            title: i18n.t("info_updated"),
            icon: "success"
          });
        })
        .catch(() => {});
    }
  }
};
</script>