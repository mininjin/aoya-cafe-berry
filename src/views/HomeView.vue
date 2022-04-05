<template>
  <TopImage />
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
import StickyHeader from "../components/StickyHeader.vue";
import TopImage from "@/components/TopImage.vue";
import HomeStart from "@/components/HomeStart.vue";
import HomeFoods from "@/components/HomeFoods.vue";
import HomeAtmosphere from "@/components/HomeAtmosphere.vue";
import HomeOwner from "@/components/HomeOwner.vue";
import CommonFooter from "@/components/CommonFooter.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    StickyHeader,
    TopImage,
    HomeStart,
    HomeFoods,
    HomeAtmosphere,
    HomeOwner,
    CommonFooter,
  },
});
</script>
