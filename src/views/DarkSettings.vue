<template>
  <div :class="[isDark ? 'bg-black' : '','lg:container lg:mx-auto',]">
    <div class="flex py-2 items-center mx-2 space-x-3">
      <div class="back">
        <router-link to="/Displaysettings">
          <ArrowLeftIcon class="w-6 h-6 font-bold" />
        </router-link>
      </div>
      <div>
        <div class="text-[1.2rem] font-bold">Dark mode</div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>
    <div class="m-2"></div>
    <DarkMode  />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import DarkMode from "@/components/Mobile/DarkMode.vue";

export default defineComponent({
  props: ["isDark"],
  components: { ArrowLeftIcon, DarkMode },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
