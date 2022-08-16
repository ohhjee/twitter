<template>
  <div class="min-h-screen" >
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
        setTheme("dark");
      }
    });

    

    return { lightMode };
  },
});
</script>
