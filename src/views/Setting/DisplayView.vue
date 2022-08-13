<template>
  <div class="lg:container lg:mx-auto">
    <div class="flex py-2 items-center mx-2 space-x-3">
      <div class="back">
        <router-link to="/Setting">
          <ArrowLeftIcon class="w-6 h-6 font-bold" />
        </router-link>
      </div>
      <div>
        <div class="text-[1rem] font-bold">Display and sound</div>
        <div class="anchor">@OLUWA__GBENGA</div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>
    <div class="m-2">
      
    </div>
    <DisplaySound />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import DisplaySound from "@/components/Mobile/DisplaySound.vue";

export default defineComponent({
  components: { ArrowLeftIcon, DisplaySound },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
