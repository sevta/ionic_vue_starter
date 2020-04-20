<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>tes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <ion-label>tab 1 {{ count }}</ion-label>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapState(["count"]),
  },
  mounted() {
    console.log("tab1 mounted");
    this.$store.commit("increment");
  },
};
</script>
