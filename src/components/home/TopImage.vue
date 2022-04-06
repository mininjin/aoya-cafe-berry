<template>
  <div
    class="h-screen w-full md:max-w-3xl overflow-hidden fixed top-0 left-0"
  >
    <img
      src="@/assets/images/berry.webp"
      alt="雪景色"
      class="absolute w-full h-full object-cover"
    />
    <ImageSlideshow :list="IMAGE_LIST" :duration="ANIMATION_DURATION" />
  </div>
  <div class="h-screen relative top-0 left-0 max-w-3xl">
    <img
      src="@/assets/logo.svg"
      alt="ロゴ"
      class="absolute w-32 object-contain top-20 right-5 animate"
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
      <p class="mb-2">自然豊かな鳥取 あおやの四季を</p>
      <p class="mb-2">café Berryの大きな窓から見てみませんか？</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/type";
import { TOP_IMAGE_PATH } from "@/constants/constant";
import { defineComponent } from "vue";
import ImageSlideshow from "../ImageSlideshow.vue";

const ANIMATION_DURATION = 8000;
const IMAGE_LIST: ImagePayload[] = [
  { src: TOP_IMAGE_PATH + "atmosphere.webp", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "window.webp", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "berry.webp", alt: "お店の雰囲気" },
  { src: TOP_IMAGE_PATH + "winter.webp", alt: "お店の雰囲気" },
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