<template>
  <ion-tabs>
    <ion-tab tab="tab1" :routes="'tab1'">
      <Tab1 />
    </ion-tab>
    <ion-tab tab="tab2" :routes="'tab2'">
      <Tab2 />
    </ion-tab>
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="tab1" :to="{ name: 'tab1' }">
          <ion-label>Tab1</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" :to="{ name: 'tab2' }">
          <ion-label>Tab2</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
export default {
  components: {
    Tab1,
    Tab2,
  },
};
</script>
