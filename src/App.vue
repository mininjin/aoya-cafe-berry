<template>
  <transition enter-active-class="transition-all duration-1000" enter-from-class="opacity-0">
    <router-view />
  </transition>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { fadeOutLoading } from "./functions/animation";

export default defineComponent({
  setup() {
    onMounted(() => {
      fadeOutLoading();
    });
    return {};
  },
});
</script>
