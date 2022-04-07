<template>
  <div class="py-10 overflow-hidden">
    <div
      :class="` transition-all duration-2000 ${
        bentoOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`"
      ref="bentoContainer"
    >
      <div class="my-10 h-56 p-2 flex">
        <div class="flex-grow-[2]"></div>
        <img
          src="@/assets/images/bento/bento_bottom.webp"
          alt="お弁当のお問い合わせは0857-86-0515まで"
          class="h-full object-contain rounded-lg"
        />
        <div class="flex-grow"></div>
      </div>
      <div class="flex items-stretch">
        <div class="w-1/12"></div>
        <div class="w-4/6 py-3">
          <div class="text-3xl mb-2 font-strong">お気軽にご相談ください</div>
          <p class="mb-2">
            ご注文は<a class="inline underline" href="tel:0857-86-0515"
              >お電話</a
            >・<a class="inline underline" href="sms:090-7998-4660">SMS</a>
            にて承っております。ご注文の際にお値段と人数をお伝えください。メニューやお値段、アレルギー等のご要望があればお気軽にご相談くださいませ。
          </p>
        </div>
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="mt-10 p-2 md:flex w-full justify-center space-x-3" ref="horsDoevreContainer">
      <div class="flex h-52">
        <div class="flex-grow"></div>
        <img
          src="@/assets/images/bento/hors_doevre.webp"
          alt="オードブル"
          :class="`h-full object-contain rounded-lg transition-all duration-2000 transform ${
            horsDoevreOpen ? 'translate-x-0' : 'translate-x-1/2 md:-translate-x-1/2'
          }`"
        />
      </div>
      <div class="flex h-52 -translate-y-10 md:translate-y-0">
        <img
          src="@/assets/images/bento/hors_doevre_red.webp"
          alt="皿盛り"
          :class="`h-full object-contain rounded-lg transition-all duration-2000 transform ${
            horsDoevreOpen ? 'translate-x-0' : '-translate-x-1/2 md:translate-x-1/2 '
          }`"
        />
        <div class="flex-grow"></div>
      </div>
    </div>
    <div class="flex items-stretch">
      <div class="w-1/12"></div>
      <div class="w-4/6 py-3">
        <div class="text-3xl mb-2 font-strong">オードブル</div>
        <p class="mb-2">も承っております。</p>
        <p class="mb-2">
          宴会用の皿盛り・オードブルもたいへん人気です。こちらも<a
            class="inline underline"
            href="tel:0857-86-0515"
            >お電話</a
          >・<a class="inline underline" href="sms:090-7998-4660">SMS</a>
          にて承っております。お気軽にご相談ください。
        </p>
      </div>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const bentoContainer = ref<HTMLElement>();
    const bentoOpen = ref(false);
    const horsDoevreContainer = ref<HTMLElement>();
    const horsDoevreOpen = ref(false);

    const checkPosition = (container?: HTMLElement): boolean => {
      const top =
        (container?.getBoundingClientRect().top || 0) + window.scrollY;
      return (
        container != undefined &&
        window.scrollY > top - container.clientHeight &&
        window.scrollY <= top + container.offsetHeight
      );
    };

    onMounted(() => {
      window.addEventListener("scroll", () => {
        bentoOpen.value = checkPosition(bentoContainer.value);
        horsDoevreOpen.value = checkPosition(horsDoevreContainer.value);
      });
    });

    return {
      bentoOpen,
      bentoContainer,
      horsDoevreOpen,
      horsDoevreContainer,
    };
  },
});
</script>