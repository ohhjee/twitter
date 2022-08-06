<template>
  <div class="flex items-center w-full">
    <div class="mx-2 w-full relative">
      <div class="h-[2rem] left-[10px] absolute flex items-center">
        <SearchIcon class="w-4 h-4 text-gray-600 bottom-0 top-0" />
      </div>
      <input type="text" class="border-2 p-[3px_30px] rounded-full w-full focus:outline-none placeholder:absolute placeholder:left-10" placeholder="Search Twitter" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";

export default defineComponent({
  components: { SearchIcon },
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
