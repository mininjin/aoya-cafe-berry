<template>
  <div class="h-screen w-full fixed top-0 left-0 flex">
    <div class="h-full w-full max-w-3xl overflow-hidden relative">
      <img
        src="@/assets/images/berry.webp"
        alt="雪景色"
        class="absolute w-full h-full object-cover"
      />
      <ImageSlideshow :list="IMAGE_LIST" :duration="ANIMATION_DURATION" />
    </div>
    <div class="flex-auto bg-sub relative text-white">
      <div class="w-full hidden lg:block p-3 absolute">
        <div class="px-3">
          <div class="text-xl mb-2 font-bold">営業時間</div>
          <div class="px-3 mb-2">
            <p>１０：００～１７：００</p>
          </div>
          <div class="text-xl mb-2 font-bold">定休日</div>
          <div class="px-3 mb-5">
            <p>月曜日、年末年始</p>
            <p>
              ※月曜が祝日の場合は次の平日。その他のお休みはInstagram、facebookに掲載
            </p>
          </div>
          <div class="text-xl mb-2 font-bold">アクセス</div>
          <div class="px-3 mb-5">
            <p>〒６８９ー０５１４</p>
            <p>鳥取県鳥取市青谷町山根３１３</p>
          </div>
        </div>
        <div class="text-center w-full mx-auto max-w-xl mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148.840771772981!2d134.01562977250657!3d35.46933897034134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3555e9814ed4444f%3A0x1e8449d755300897!2scafe%20Berry!5e0!3m2!1sja!2sjp!4v1616407325995!5m2!1sja!2sjp"
            :style="{ border: 0 }"
            allowFullScreen=""
            loading="lazy"
            class="w-full"
          ></iframe>
        </div>
        <div class="px-3">
          <div class="text-xl mb-2 font-bold">お問合せ</div>
          <div class="px-3 mb-5">
            <p class="flex icenter">
              TEL：<a
                href="tel:0857860515"
                class="inline-flex items-center underline"
                ><font-awesome-icon
                  icon="phone-flip"
                  class="h-5 mr-2"
                />0857-86-0515</a
              >
            </p>
            <p class="flex items-center">
              FAX：<font-awesome-icon icon="fax" class="h-5 mr-2" />0857-86-0515
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen relative top-0 left-0 max-w-3xl">
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