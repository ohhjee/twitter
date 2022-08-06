<template>
  <div v-if="homeloader === null">
    <div
      class="min-h-screen"
      
    >
      <router-view />
    </div>
  </div>
  <div v-else>
    <div class="bg-red-500 h-screen w-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: ["isDark"],
  setup() {
    const homeloader = ref<null>(null);

    onMounted(() => {
      homeloader.value;
    });
    return { homeloader };
  },
});
</script>
<style></style>
