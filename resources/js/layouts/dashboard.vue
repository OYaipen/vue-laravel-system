<template>
  <div id="page-top">
    <div id="wrapper">
      <Sidebar />
      <ContentPage>
        <child />
      </ContentPage>
    </div>
    <ScroolTop />
  </div>
</template>

<script>
import Sidebar from "~/components/panel/Sidebar/index";
import ContentPage from "~/components/panel/ContentPage/index";
import ScroolTop from "~/components/panel/ScroolTop";

export default {
  name: "Dashboard",
  middleware: "auth",
  components: {
    Sidebar,
    ContentPage,
    ScroolTop
  }
};
</script>

<style>
</style>