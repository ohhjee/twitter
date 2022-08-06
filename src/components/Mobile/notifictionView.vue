<template>
  <div class="flex items-center w-full">
    <div class="border-2 rounded-full h-6 w-6 p-4 cursor-pointer" @click="sidebar"></div>
    <div class="mx-2 w-full">
      Notification
    </div>
    <CogIcon class="w-8 h-8" />
    <SidebarView
      :showModal="showModal"
      v-show="showModal"
      @closeNav="sidebar"
    />
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { CogIcon } from "@heroicons/vue/outline";
import SidebarView from "./SidebarView.vue";

export default defineComponent({
  components: { CogIcon, SidebarView },
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
