<template>
  <div
    id="dark-mode"
   
  >
    <div class="flex items-center py-2 mx-2 space-x-3">
      <div class="back">
        <router-link to="/Displaysettings">
          <ArrowLeftIcon class="w-6 h-6 font-bold" />
        </router-link>
      </div>
      <div>
        <div class="text-[1.2rem] font-bold">Dark mode</div>
      </div>
    </div>
    <div
     
    ></div>
    <div class="m-2"></div>
    <DarkMode @white="light" @dark="black" :lightMode="lightMode" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import DarkMode from "@/components/Mobile/DarkMode.vue";
import { getTheme, setTheme } from "@/util/themeProvider";

export default defineComponent({
  // props: ["lightMode"],
  components: { ArrowLeftIcon, DarkMode },
  emits: ["light", "black"],

  setup() {
    const lightMode = ref<boolean>(getTheme() === "light");

    const light = () => {
      const theme = "light";
      setTheme(theme);
      lightMode.value = true;
    document.body.setAttribute("theme", theme)
    };

    const black = () => {
      const theme = "dark";
      setTheme(theme);
      lightMode.value = false;
      document.body.setAttribute("theme", theme)
      // this.lightMode = true;
      // localStorage.setItem("lightMode", this.lightMode);
    };

    return { lightMode, light, black };
  },
  methods: {},
});
</script>

<style scoped>

</style>
