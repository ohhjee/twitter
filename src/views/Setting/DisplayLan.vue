<template>
  <div class="container mx-auto">
    <div class="flex py-2 items-center mx-2 space-x-3">
      <div class="back">
        <router-link to="/Setting">
          <ArrowLeftIcon class="w-6 h-6 font-bold" />
        </router-link>
      </div>
      <div>
        <div class="text-[1rem] font-bold">
          Accessibility, display and languages
        </div>
        <div class="anchor">@OLUWA__GBENGA</div>
      </div>
    </div>
    <div class="border-t-[1px] border-black"></div>
    <div class="m-3">
      <div class="text-gray-600 text-sm">
        Manage how Twitter content is display to you
      </div>
    </div>
    <AccessibilityVIew/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import AccessibilityVIew from "../../components/Mobile/AccessibilityVIew.vue";

export default defineComponent({
  name:"DisplayLan",
  components: { ArrowLeftIcon, AccessibilityVIew },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
