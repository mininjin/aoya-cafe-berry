<template>
  <div class="py-10">
    <div class="flex items-start py-5">
      <img
        src="@/assets/images/signature.jpg"
        alt="ベリィの看板"
        class="w-3/4 object-contain object-left rounded-r-xl animate"
      />
      <div class="flex-auto py-6 px-2 text-center">
        <span class="write-vertical text-2xl font-bold">テストテキスト</span>
      </div>
    </div>
    <div class="flex items-stretch">
      <div class="w-1/12"></div>
      <div class="w-4/6 py-3">
        <div class="text-3xl mb-2 font-strong">海と山</div>
        <p class="mb-2">に囲まれた鳥取市青谷町。</p>
        <p>
          café Berryはそんな自然豊かな青谷の地に2002年夏にオープンしました。
        </p>
      </div>
      <div class="flex-grow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.animate {
  animation: animation 1s infinite alternate ease-in-out;
}
@keyframes animation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5px);
  }
}
</style>