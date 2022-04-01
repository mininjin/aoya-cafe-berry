<template>
  <div
    class="mb-3 flex flex-col py-5 overflow-x-hidden"
    ref="container"
  >
    <div class="flex items-start space-x-2">
      <img
        src="@/assets/images/cake.jpg"
        alt="シフォンケーキ"
        :class="`w-1/2 object-contain rounded-xl ${open ? 'animate-fluffy-br' : ''}`"
      />
      <img
        src="@/assets/images/coffee.jpg"
        alt="コーヒー"
        :class="`w-1/2 object-contain rounded-xl ${open ? 'animate-fluffy-bl' : ''}`"
      />
    </div>
    <div class="flex items-end space-x-2">
      <div
        :class="`w-1/3 flex flex-col flex-shrink-0 space-y-2 ${
          open ? 'animate-fluffy-tr' : ''
        }`"
      >
        <img
          src="@/assets/images/tee.jpg"
          alt="紅茶"
          class="w-full object-contain rounded-xl"
        />
        <img
          src="@/assets/images/pudding.jpg"
          alt="プリン"
          class="w-full object-contain rounded-xl"
        />
      </div>
      <div class="flex-auto">
        <img
          src="@/assets/images/cheese.jpg"
          alt="チーズケーキ"
          :class="`w-full object-contain rounded-xl ${open ? 'animate-fluffy-tl' : ''}`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const container = ref<HTMLElement>();
    const open = ref(false);

    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (
          container.value &&
          window.scrollY >
            container.value.offsetTop - container.value.clientHeight / 1.5
        ) {
          open.value = true;
        }
      });
    });

    return { open, container };
  },
});
</script>

<style scoped>
.animate-fluffy-tl {
  animation: fluffyTL 10s ease-out infinite;
}
.animate-fluffy-tr {
  animation: fluffyTR 10s ease-out infinite;
}
.animate-fluffy-bl {
  animation: fluffyBL 10s ease-out infinite;
}
.animate-fluffy-br {
  animation: fluffyBR 10s ease-out infinite;
}

@keyframes fluffyTL {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-10px, -10px);
  }
  75% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fluffyTR {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -10px);
  }
  75% {
    transform: translate(-10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fluffyBL {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes fluffyBR {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>