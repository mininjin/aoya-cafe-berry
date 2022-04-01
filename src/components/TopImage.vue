<template>
  <div class="h-screen w-full fixed overflow-hidden">
    <ImageSlideshow :list="IMAGE_LIST" :duration="ANIMATION_DURATION" />
  </div>
  <div class="h-screen relative">
    <img
      src="@/assets/logo.svg"
      alt="ロゴ"
      class="absolute w-32 object-contain top-20 right-5 z-20 animate"
    />
    <div
      class="
        text-center text-header text-2xl
        font-bold
        h-full
        flex
        items-center
        justify-end
        flex-col
        font-header
        pb-20
      "
    >
      <p class="mb-2">四季の景色をみせる青谷の地で</p>
      <p class="mb-2">ゆったりとしたひとときを</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/type";
import { TOP_IMAGE_PATH } from "@/constants/constant";
import { defineComponent } from "vue";
import ImageSlideshow from "./ImageSlideshow.vue";

const ANIMATION_DURATION = 8000;
const IMAGE_LIST: ImagePayload[] = [
  { src: TOP_IMAGE_PATH + "atmosphere.jpg", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "window.jpg", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "berry.jpg", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "winter.jpg", alt: "お店の雰囲気" },
];

export default defineComponent({
  setup() {
    return { ANIMATION_DURATION, IMAGE_LIST };
  },
  components: { ImageSlideshow },
});
</script>

<style scoped>
.bg-full {
  background-size: 100% 100%;
}
.animate {
  animation: animation 5s infinite alternate linear;
}
@keyframes animation {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>