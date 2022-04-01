<template>
  <div
    class="sticky top-0 flex items-center py-2 px-4 w-full bg-header shadow-xl z-30"
  >
    <div class="flex items-center flex-grow-0 text-left">
      <img
        src="@/assets/logo.svg"
        alt="ロゴ"
        class="h-10 object-contain rounded-xl overflow-hidden"
        @click="scrollToTop"
      />
    </div>
    <div class="flex-grow text-left text-sub px-4 text-xl font-header font-bold">café Berry</div>
    <div class="flex items-center flex-grow-0 px-3">
      <!-- <font-awesome-icon icon="bars" class="w-5 text-sub" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    };
  },
});
</script>
