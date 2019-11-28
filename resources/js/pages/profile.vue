<template>
  <div>
    <h1 class="h3 mb-4 text-gray-800 text-center">{{$t('profile')}}</h1>
    <div class="row">
      <div class="col-sm-6 offset-sm-3">
        <div class="card shadow mb-4 border-left-primary">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{{$t('your_info')}}</h6>
          </div>
          <div class="card-body">
            <form @submit.prevent="update" @keydown="form.onKeydown($event)">
              <alert-success :form="form" :message="$t('info_updated')" />
              <!-- Name -->
              <div class="form-group row">
                <div class="col-sm-4 text-right offset-sm-1">
                  <img :src="user.photo_url" class="img-profile rounded-circle" width="50" />
                  <div class="col-sm-1"></div>
                </div>
                <label
                  for="inputPassword"
                  class="col-sm-6 col-form-label text-gray-600"
                >{{ user.name }}</label>
              </div>
              <!-- Name -->
              <div class="form-group row">
                <label
                  for="inputPassword"
                  class="col-sm-4 col-form-label offset-sm-1 text-right"
                >{{ $t('name') }}:</label>
                <div class="col-sm-6">
                  <input
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    class="form-control"
                    type="text"
                    name="name"
                  />
                  <has-error :form="form" field="name" />
                  <div class="col-sm-1"></div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="inputPassword"
                  class="col-sm-4 col-form-label offset-sm-1 text-right"
                >{{ $t('email') }}:</label>
                <div class="col-sm-6">
                  <input
                    v-model="form.email"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    class="form-control"
                    type="email"
                    name="email"
                  />
                  <has-error :form="form" field="email" />
                  <div class="col-sm-1"></div>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="inputExperience"
                  class="col-sm-4 col-form-label offset-sm-1 text-right"
                >{{$t('biography')}}:</label>
                <div class="col-sm-6">
                  <textarea
                    v-model="form.bio"
                    class="form-control"
                    id="inputExperience"
                    placeholder="Experiencia"
                    rows="4"
                    :class="{ 'is-invalid': form.errors.has('bio') }"
                  ></textarea>
                  <has-error :form="form" field="bio"></has-error>
                  <div class="col-sm-1"></div>
                </div>
              </div>
              <!-- Submit Button -->
              <div class="form-group row">
                <div class="col-sm-4 col-form-label offset-sm-1 text-right"></div>
                <div class="col-sm-6">
                  <v-button :loading="form.busy" type="primary">{{ $t('update') }}</v-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "vform";
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
      email: ""
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
    console.log(this.user);
  },

  methods: {
    async update() {
      const { data } = await this.form.patch("/api/settings/profile");

      this.$store.dispatch("auth/updateUser", { user: data });
    }
  }
};
</script>
<style>
.widget-user-header {
  background-position: center center;
  background-size: cover;
  height: 250px !important;
}
.widget-user .card-footer {
  padding: 0;
}
</style>