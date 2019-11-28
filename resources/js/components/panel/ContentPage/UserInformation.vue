<template>
  <!-- Nav Item - User Information -->
  <li class="nav-item dropdown no-arrow">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="userDropdown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ user.name }}</span>
      <img :src="user.photo_url" class="img-profile rounded-circle" />
    </a>
    <!-- Dropdown - User Information -->
    <div
      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
      aria-labelledby="userDropdown"
    >
      <a class="dropdown-item" href="#">
        <fa icon="user" class="fa-sm fa-fw mr-2 text-gray-400" />
        {{$t('profile')}}
      </a>
      <router-link :to="{ name: 'settings.profile' }" class="dropdown-item" href="#">
        <fa icon="cog" class="fa-sm fa-fw mr-2 text-gray-400" />
        {{$t('settings')}}
      </router-link>
      <a class="dropdown-item" href="#">
        <fa icon="list" class="fa-sm fa-fw mr-2 text-gray-400" />
        {{$t('activity_log')}}
      </a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#" @click.prevent="logout">
        <fa icon="sign-out-alt" class="fa-sm fa-fw mr-2 text-gray-400" />
        {{$t('logout')}}
      </a>
    </div>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    user: "auth/user"
  }),

  methods: {
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
</style>