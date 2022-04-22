<template>
  <div class="h-screen w-full lg:max-w-4xl overflow-hidden fixed top-0 left-0">
    <img src="@/assets/images/waiter.webp" alt="雪景色" class="absolute w-full h-full object-cover" />
    <ImageSlideshow :list="IMAGE_LIST" :duration="ANIMATION_DURATION" />
  </div>
  <div class="h-screen relative top-0 left-0 lg:max-w-4xl">
    <img src="@/assets/logo.svg" alt="ロゴ" class="absolute w-32 object-contain top-20 right-5 animate" />
    <div class="
        text-center text-header text-shadow text-2xl
        font-bold
        h-full
        flex
        items-center
        justify-end
        flex-col
        font-header
      ">
      <p class="mb-2">自然豊かな鳥取 あおやの四季を</p>
      <p class="mb-2">café Berryの大きな窓から見てみませんか？</p>
      <div class="py-5 w-full flex items-end justify-center">
        <div class="w-1/2 h-10 flex items-center justify-center overflow-y-hidden">
          <span class="h-full  animate-guide relative">
            <font-awesome-icon icon="arrow-down" class="h-full aspect-square text-black text-opacity-50 translate-x-0.5 translate-y-0.5 absolute top-0 left-0" />
            <font-awesome-icon icon="arrow-down" class="h-full aspect-square text-header relative top-0 left-0" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/type";
import { TOP_IMAGE_PATH } from "@/constants/constant";
import { defineComponent, } from "vue";
import ImageSlideshow from "../ImageSlideshow.vue";

const ANIMATION_DURATION = 8000;
const IMAGE_LIST: ImagePayload[] = [
  { src: TOP_IMAGE_PATH + "atmosphere.webp", alt: "お店の雰囲気" },
  {
    src: TOP_IMAGE_PATH + "window.webp",
    alt: "大きな窓からは四季折々の季節が",
  },
  { src: TOP_IMAGE_PATH + "berry.webp", alt: "お店の看板" },
  { src: TOP_IMAGE_PATH + "winter.webp", alt: "一面の雪景色" },
  { src: TOP_IMAGE_PATH + "waiter.webp", alt: "ウェイター" },
];

export default defineComponent({
  setup() {

    return { ANIMATION_DURATION, IMAGE_LIST, };
  },
  components: { ImageSlideshow },
});
</script>

<style scoped>
.text-shadow {
  text-shadow: 0.1rem 0.1rem 0.1rem #0005;
}

.bg-full {
  background-size: 100% 100%;
}

.animate {
  animation: animation 5s infinite alternate linear;
}

.animate-guide {
  animation: animation-guide 2s infinite ease-in-out;
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

@keyframes animation-guide {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(100%);
  }
}
</style>