<template>
  <div id="app">
    <ion-app>
      <Tabs />
      <ion-vue-router />
    </ion-app>
  </div>
</template>
<script>
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import Tabs from "./views/Tabs";
export default {
  components: {
    Tabs,
  },
};
</script>
<style lang="scss"></style>
