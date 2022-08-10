<template>
  <div :class="[lightMode ? 'bg-black text-white' : '', 'min-h-screen']">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // props: ["lightMode"],/
  //  emits:["light", "black"],

  setup(props) {
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
<style></style>
