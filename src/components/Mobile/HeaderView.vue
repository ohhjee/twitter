<template>
  <div class="m-4">
    <div class="flex justify-between items-center">
      <div
        class="rounded-3xl h-6 w-6 border-2 border-red-500 cursor-pointer"
        @click="sidebar" 
      ></div>
      <!-- <div class="twitter_icon border-2 rounded-full h-6 w-6"></div> -->
      <fonts :icon="['fab', 'twitter']" class="w-6 h-6 text-blue-500"/>
      <SparklesIcon class="w-6 h-6 text-black" />
    </div>
    <SidebarView class="p-0" :showModal="showModal" v-show="showModal" @closeNav="sidebar"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SparklesIcon } from "@heroicons/vue/outline";
import SidebarView from "./SidebarView.vue";

export default defineComponent({
  components: { SparklesIcon, SidebarView },
  setup() {
    const showModal = ref<boolean>(false);
    return { showModal };
  },
  methods: {
    sidebar() {
      this.showModal = !this.showModal;
    },
  },
});
</script>

<style scoped></style>
