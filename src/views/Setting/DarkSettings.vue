<template>
  <div :class="[lightMode ? 'bg-black text-white' : '']">
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
    <div :class="[lightMode ? 'border-t-[1px] border-white' : 'border-t-[1px] border-black']"></div>
    <div class="m-2"></div>
    <DarkMode @white="light" @dark="black" :lightMode="lightMode"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import DarkMode from "@/components/Mobile/DarkMode.vue";

export default defineComponent({
  // props: ["lightMode"],
  components: { ArrowLeftIcon, DarkMode },
  emits:["light", "black"],

  setup() {
    const lightMode = ref<any>(localStorage.getItem("lightMode") == "true");
    return { lightMode };
  },
  methods: {
    light() {
      this.lightMode = false;
      localStorage.setItem("lightMode", this.lightMode);
      if (this.lightMode.checked) this.lightMode.checked;
    },
    black() {
      this.lightMode = true;
      localStorage.setItem("lightMode", this.lightMode);
    },
  },
});
</script>

<style scoped></style>
