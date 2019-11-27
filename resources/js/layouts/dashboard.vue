<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />
      <ContentPage />
    </div>
    <ScroolTop />
    <LogoutModal />
  </div>
</template>

<script>
import Sidebar from "~/components/panel/Sidebar/index";
import ContentPage from "~/components/panel/ContentPage/index";
import ScroolTop from "~/components/panel/ScroolTop";
import LogoutModal from "~/components/panel/LogoutModal";

export default {
  name: "Dashboard",

  components: {
    Sidebar,
    ContentPage,
    ScroolTop,
    LogoutModal
  }
};
</script>

<style>
</style>