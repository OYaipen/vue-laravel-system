<template>
  <div class="text-center">
    <img src="/img/svg/landing.svg" class="img-fluid" />
    <div class="title mb-4 color-text">{{ $t('you_are_logged_in') }}</div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "dashboard",
  metaInfo() {
    return { title: this.$t("home") };
  }
};
</script>
<style >
.title {
  font-size: 5vw;
}
</style>