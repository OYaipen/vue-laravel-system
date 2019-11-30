<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
        <Topbar />
        <slot></slot>
    </div>
    <!-- Footer -->
    <footer class="sticky-footer bg-white">
      <div class="container my-auto">
        <div class="copyright text-center my-auto">
          <span>Copyright &copy; {{appName}} 2019</span>
        </div>
      </div>
    </footer>
    <!-- End of Footer -->
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import { mapGetters } from "vuex";
import Topbar from "./Topbar";
export default {
  name: "ContentPage",
  components: {
    Topbar
  },
  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: "auth/user"
  })
};
</script>

<style>
</style>