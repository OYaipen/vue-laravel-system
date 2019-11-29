<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
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
    <div class="sidebar-heading">{{$t('interface')}}</div>
    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link :to="{ name: 'users' }" class="nav-link" href="#">
        <fa icon="users" class="sidicon" />
        <span>{{$t('users')}}</span>
      </router-link>
    </li>
    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <fa icon="cog" class="sidicon" />
        <span>{{$t('components')}}</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Custom Components:</h6>
          <a class="collapse-item" href="buttons.html">Buttons</a>
          <a class="collapse-item" href="cards.html">Cards</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />
    <!-- Heading -->
    <div class="sidebar-heading">{{$t('addons')}}</div>
    <!-- Nav Item - Pages Collapse Menu -->
    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <a class="nav-link" href="charts.html">
        <fa icon="chart-area" class="sidicon" />
        <span>{{$t('charts')}}</span>
      </a>
    </li>
    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <a class="nav-link" href="tables.html">
        <fa icon="table" class="sidicon" />
        <span>{{$t('tables')}}</span>
      </a>
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

  computed: mapGetters({
    user: "auth/user"
  }),
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