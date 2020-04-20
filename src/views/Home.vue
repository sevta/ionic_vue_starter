<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>tes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <ion-button>sf</ion-button>
        <ion-button color="secondary">kk</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    console.log("home mounted");
  },
};
</script>
