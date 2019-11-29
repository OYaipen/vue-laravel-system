<template>
  <card :title="$t('your_password')" class="border-left-primary">
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('password_updated')" />
      <!-- photo -->
      <div class="form-group row">
        <div class="col-sm-4 text-md-right">
          <img :src="user.photo_url" class="img-profile rounded-circle" width="50" />
          <div class="col-sm-1"></div>
        </div>
        <label class="col-sm-6 col-form-label text-gray-600">{{ user.name }}</label>
      </div>
      <!-- Password -->
      <div class="form-group row">
        <label
          for="inputPassword"
          class="col-sm-4 col-form-label text-md-right"
        >{{ $t('password') }}:</label>
        <div class="col-sm-6">
          <input
            v-model="user.password"
            :class="{ 'is-invalid': form.errors.has('password') }"
            class="form-control"
            type="password"
            name="password"
            id="inputPassword"
          />
          <has-error :form="form" field="password" />
        </div>
      </div>
      <!-- New Password -->
      <div class="form-group row">
        <label
          for="inputNewPassword"
          class="col-sm-4 col-form-label text-md-right"
        >{{ $t('new_password') }}</label>
        <div class="col-md-6">
          <input
            v-model="form.password"
            :class="{ 'is-invalid': form.errors.has('password') }"
            class="form-control"
            type="password"
            name="password"
            id="inputNewPassword"
          />
          <has-error :form="form" field="password" />
        </div>
      </div>

      <!-- Password Confirmation -->
      <div class="form-group row">
        <label class="col-sm-4 col-form-label text-md-right">{{ $t('confirm_password') }}</label>
        <div class="col-md-6">
          <input
            v-model="form.password_confirmation"
            :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
            class="form-control"
            type="password"
            name="password_confirmation"
          />
          <has-error :form="form" field="password_confirmation" />
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
import Form from "vform";
import { mapGetters } from "vuex";
export default {
  scrollToTop: false,
  computed: mapGetters({
    user: "auth/user"
  }),

  metaInfo() {
    return { title: this.$t("settings") };
  },

  data: () => ({
    form: new Form({
      password: "",
      password_confirmation: ""
    })
  }),

  methods: {
    async update() {
      await this.form.patch("/api/settings/password");
      this.form.reset();
    }
  }
};
</script>
