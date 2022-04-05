<template>
  <div class="w-full relative h-72 overflow-hidden" ref="container">
    <transition-group
      enter-active-class="enter"
      enter-from-class="enter-from"
      enter-to-class="enter-to"
    >
      <div
        v-for="image in images"
        :key="image.key"
        class="absolute w-full -translate-x-full"
        :style="{
          transitionDuration: ANIMATION_DURATION + 'ms',
        }"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="object-contain w-1/3"
          :style="{
            transform: `translateY(${image.top}px)`,
          }"
        />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ImagePayload } from "@/@types/type";
import { VEGETABLES_IMAGE_PATH } from "@/constants/constant";
import { computed, defineComponent, onMounted, ref } from "vue";

type ImageListElement = ImagePayload & { top: number; delay: number };
const ANIMATION_DURATION = 10000;
const PUSH_WAIT_TIME = 100;
const IMAGE_LIST: ImageListElement[] = [
  {
    src: VEGETABLES_IMAGE_PATH + "tomato.webp",
    alt: "トマト",
    top: 0,
    delay: 0,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "red_pepper.webp",
    alt: "唐辛子",
    top: 60,
    delay: ANIMATION_DURATION * 0.05,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "onion.webp",
    alt: "紫たまねぎ",
    top: 10,
    delay: ANIMATION_DURATION * 0.22,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "chestnut.webp",
    alt: "栗",
    top: 58,
    delay: ANIMATION_DURATION * 0.27,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "ginger.webp",
    alt: "しょうが",
    top: 0,
    delay: ANIMATION_DURATION * 0.4,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "lemon.webp",
    alt: "レモン",
    top: 40,
    delay: ANIMATION_DURATION * 0.45,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "lettuce.webp",
    alt: "レタス",
    top: 0,
    delay: ANIMATION_DURATION * 0.65,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "strawberry.webp",
    alt: "いちご",
    top: 65,
    delay: ANIMATION_DURATION * 0.68,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "pear.webp",
    alt: "洋梨",
    top: 0,
    delay: ANIMATION_DURATION * 0.84,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "yuzu.webp",
    alt: "ゆず",
    top: 55,
    delay: ANIMATION_DURATION * 0.87,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "moroheiya.webp",
    alt: "モロヘイヤ",
    top: 5,
    delay: ANIMATION_DURATION * 1.04,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "ume.webp",
    alt: "梅干し",
    top: 70,
    delay: ANIMATION_DURATION * 1.07,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "shiitake.webp",
    alt: "椎茸",
    top: 20,
    delay: ANIMATION_DURATION * 1.26,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "green_tomato.webp",
    alt: "青トマト",
    top: 0,
    delay: ANIMATION_DURATION * 1.47,
  },
  {
    src: VEGETABLES_IMAGE_PATH + "ginkgo.webp",
    alt: "銀杏",
    top: 55,
    delay: ANIMATION_DURATION * 1.52,
  },
];

export default defineComponent({
  setup() {
    const container = ref<HTMLElement>();
    const height = ref(0);
    const list = computed(() =>
      IMAGE_LIST.map((v, i) => ({
        ...v,
        top: (height.value * v.top) / 100,
        key: v.alt + i,
      }))
    );
    const images = ref<typeof list.value>([]);
    const waitTime = computed(() =>
      Math.max(
        ANIMATION_DURATION * 1.18 -
          IMAGE_LIST.map((v) => v.delay).reduce(
            (prev, cur) => (prev < cur ? cur : prev),
            0
          ),
        ANIMATION_DURATION * 0.18
      )
    );

    onMounted(async () => {
      height.value = container.value?.clientHeight || 0;
      // initial push
      await Promise.all(
        list.value.map(
          (v, i) =>
            new Promise<void>((resolve) => {
              setTimeout(() => {
                images.value.push(v);
                resolve();
              }, v.delay);
            })
        )
      );
      // interval
      if (images.value.length > 0) {
        // eslint-disable-next-line no-constant-condition
        while (1) {
          // wait
          await new Promise((resolve) => setTimeout(resolve, waitTime.value));
          // push
          await Promise.all(
            images.value.map(
              (v, i) =>
                new Promise<void>((resolve) => {
                  setTimeout(() => {
                    const image = images.value.splice(0, 1)[0];
                    setTimeout(() => {
                      images.value.push(image);
                      resolve();
                    }, PUSH_WAIT_TIME);
                  }, v.delay);
                })
            )
          );
        }
      }
    });

    return { images, ANIMATION_DURATION, container };
  },
});
</script>

<style scoped>
.enter {
  transition-property: all;
  transition-timing-function: linear;
}
.enter-from {
  transform: translateX(100%);
}
.enter-to {
  transform: translateX(-100%);
}
</style>