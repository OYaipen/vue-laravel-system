<template>
  <!-- Main Content -->
  <div id="content">
    <Topbar />

    <child />
    <!-- /.container-fluid -->
  </div>
  <!-- End of Main Content -->
</template>

<script>
import { mapGetters } from "vuex";
import Topbar from "./Topbar";
export default {
  name: "MainContent",
  components: {
    Topbar
  },
  computed: mapGetters({
    user: "auth/user"
  })
};
</script>

<style>
</style>