<template>
  <!-- Scroll to Top Button-->
  <GoTop :size="30" :right="30" :bottom="30"	class="bg-dark" :max-width="310" />
</template>

<script>
import { mapGetters } from "vuex";
import GoTop from "@inotom/vue-go-top";
export default {
  components: {
    GoTop
  }
};
</script>

<style>
</style>