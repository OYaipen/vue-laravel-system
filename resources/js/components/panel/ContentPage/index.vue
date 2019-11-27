<template>
  <!-- Content Wrapper -->
  <div id="content-wrapper" class="d-flex flex-column">
    <MainContent/>

    <Footer />
  </div>
  <!-- End of Content Wrapper -->
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "./Footer";
import MainContent from "./MainContent";

export default {
  name: "ContentPage",

  components: {
    Footer,
    MainContent
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