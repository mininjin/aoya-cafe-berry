<template>
  <router-view />
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
