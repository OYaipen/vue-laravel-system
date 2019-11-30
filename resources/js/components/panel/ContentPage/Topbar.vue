<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    <!-- Sidebar Toggle (Topbar) -->
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
      <fa icon="bars" />
    </button>

    <!-- Topbar Search -->
    <div
      class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"

    >
      <div class="input-group">
        <!-- v-on:keyup.enter="searchit" -->
        <!-- v-model="search" -->
        <input
          class="form-control bg-light border-0 small"
          type="search"
          :placeholder="$t('search')"
          aria-label="Search"
        />
        <!-- @click="searchit" -->
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <fa icon="search" class="fa-sm" />
          </button>
        </div>
      </div>
    </div>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <fa icon="search" class="fa-fm" />
        </a>
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <div class="form-inline mr-auto w-100 navbar-search">
            <!-- @keyup="searchit"
            v-model="search"-->
            <div class="input-group">
              <input
                type="search"
                :placeholder="$t('search')"
                class="form-control bg-light border-0 small"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <!-- @click="searchit" -->
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <fa icon="search" class="fa-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <locale-dropdown />
      <div class="topbar-divider d-none d-sm-block"></div>
      <UserInformation />
    </ul>
  </nav>
  <!-- End of Topbar -->
</template>
<script>
import UserInformation from "./UserInformation";
import LocaleDropdown from "../../LocaleDropdown";
export default {
  name: "Topbar",
  components: {
    UserInformation,
    LocaleDropdown
  },
  data: () => ({
    appName: window.config.appName
  })
};
</script>

<style>
</style>