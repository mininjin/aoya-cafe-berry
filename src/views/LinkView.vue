<template>
  <div class="relative z-5 bg-theme left-0 max-w-4xl">
    <StickyHeader />
    <LinkMain />
    <CommonFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StickyHeader from "@/components/StickyHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import LinkMain from "@/components/link/LinkMain.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    StickyHeader,
    CommonFooter,
    LinkMain,
  },
});
</script>
