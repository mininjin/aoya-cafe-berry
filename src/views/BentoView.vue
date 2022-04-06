<template>
  <div class="relative z-5 bg-theme left-0 max-w-3xl">
    <StickyHeader />
    <HomeStart />
    <HomeFoods />
    <HomeAtmosphere />
    <HomeOwner />
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import HomeStart from "@/components/home/HomeStart.vue";
import HomeFoods from "@/components/home/HomeFoods.vue";
import HomeAtmosphere from "@/components/home/HomeAtmosphere.vue";
import HomeOwner from "@/components/home/HomeOwner.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    StickyHeader,
    HomeStart,
    HomeFoods,
    HomeAtmosphere,
    HomeOwner,
    CommonFooter,
  },
});
</script>
