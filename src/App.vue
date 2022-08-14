<template>
  <div class="min-h-screen" :class="{ 'bg-black text-white': !lightMode }">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { getTheme, setTheme } from "@/util/themeProvider";

export default defineComponent({
  // props: ["lightMode"],/
  //  emits:["light", "black"], ==> testing

  setup() {
    //remove later
    const lightMode = getTheme() === "light";

    onMounted(() => {
      if (!getTheme()) {
        setTheme("light");
      }
    });

    //   methods: {
    //   light() {
    //     this.lightMode = false;
    //     localStorage.setItem("lightMode", this.lightMode);
    //     // if (this.lightMode.checked) this.lightMode.checked;
    //   },
    //   black() {
    //     this.lightMode = true;
    //     localStorage.setItem("lightMode", this.lightMode);
    //   },
    // },

    return { lightMode };
  },
});
</script>
