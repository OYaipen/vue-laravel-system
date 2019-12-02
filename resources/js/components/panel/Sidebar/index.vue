<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gray-900 sidebar sidebar-dark accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <router-link
      :to="{ name: user ? 'home' : 'welcome' }"
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <fa icon="laugh-wink" class="icon" />
      </div>
      <div class="sidebar-brand-text mx-3">
        {{appName}}
        <!-- <sup>2</sup> -->
      </div>
    </router-link>
    <!-- Divider -->
    <hr class="sidebar-divider my-0" />
    <!-- Nav Item - Dashboard -->

    <li class="nav-item active">
      <router-link :to="{ name: 'dashboard' }" class="nav-link" href="#">
        <fa icon="tachometer-alt" class="sidicon" />
        <span>{{$t('dashboard')}}</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">{{$t('modules')}}</div>
    <!-- Nav Items -->
    <li v-for="tab in tabs" :key="tab.route" class="nav-item active">
      <router-link
        :to="{ name: tab.route }"
        class="nav-link"
        active-class="active"
        v-if="user.type == tab.show"
      >
        <fa :icon="tab.icon" fixed-width class="sidicon" />
        <span>{{ tab.name }}</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  data: () => ({
    appName: window.config.appName
  }),
  computed: {
    ...mapGetters({
      user: "auth/user"
    }),
    tabs() {
      return [
        {
          icon: "users",
          name: this.$t("users"),
          route: "users",
          show: "admin"
        }
      ];
    }
  },

  mounted() {
    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });
    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }
    });
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(
      e
    ) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }
};
</script>

<style>
</style>