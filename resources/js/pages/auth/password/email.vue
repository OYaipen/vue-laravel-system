<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <img src="/img/pencil.png" width="80" />
                    <h1 class="h4 text-gray-900 mb-2">{{$t('reset_password')}}</h1>
                    <p class="mb-4">{{$t('message_reset_email')}}</p>
                  </div>
                  <form class="user" @submit.prevent="send" @keydown="form.onKeydown($event)">
                    <alert-success :form="form" :message="status" />
                    <!-- Email -->
                    <div class="form-group">
                      <input
                        v-model="form.email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        class="form-control form-control-user"
                        type="email"
                        name="email"
                        :placeholder="$t('email')"
                      />
                      <has-error :form="form" field="email" />
                    </div>
                    <!-- Submit Button -->
                    <v-button
                      :loading="form.busy"
                      class="btn btn-primary btn-user btn-block"
                    >{{ $t('send_password_reset_link') }}</v-button>
                  </form>
                  <hr />
                  <div class="text-center">
                    <router-link
                      :to="{ name: 'login' }"
                      class="small ml-auto my-auto"
                    >{{ $t('login') }}</router-link>
                  </div>
                  <div class="text-center">
                    <router-link
                      :to="{ name: 'register' }"
                      class="small ml-auto my-auto"
                    >{{ $t('register') }}</router-link>
                  </div>
                  <!-- <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="login.html">Already have an account? Login!</a>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";

export default {
  layout: "free",
  middleware: "guest",

  metaInfo() {
    return { title: this.$t("reset_password") };
  },

  data: () => ({
    status: "",
    form: new Form({
      email: ""
    })
  }),

  methods: {
    async send() {
      const { data } = await this.form.post("/api/password/email");

      this.status = data.status;

      this.form.reset();
    }
  }
};
</script>
<style>
body {
  background-color: #076b91;
}
</style>