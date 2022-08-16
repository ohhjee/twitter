<template>
  <div class="grid grid-row-5 place-items-start gap-y-[1.3rem]">
    <router-link
      :to="{ path: '/bookmark' }"
      class="p-[0] gap-x-[2rem] font-bold flex"
    >
      <BookmarkIcon class="w-6 h-6" id="icon" />
      <span>Bookmark</span>
    </router-link>
    <router-link
      :to="{ path: '/profile' }"
      class="p-[0] gap-x-[2rem] font-bold flex"
    >
      <UserIcon class="w-6 h-6" />
      <span>Profile</span>
    </router-link>
    <router-link
      :to="{ path: '/more' }"
      class="p-[0] gap-x-[2rem] font-bold flex"
    >
      <DotsCircleHorizontalIcon class="w-6 h-6" />
      <span>More</span>
    </router-link>

    <router-link to="#" class="w-full text-center">
      <div
        class="py-3 px-6 rounded-[50px] font-semibold text-white bg-blue-500"
      >
        <p>Tweet</p>
      </div>
    </router-link>
  </div>
  <div class="dark-mode m-4">
    <div
      class="flex justify-between"
      id="shows"
      v-if="!lightMode"
      @click="theme_light"
    >
      light Mode
      <div>
        <SunIcon class="w-6 h-6 text-yellow-400" />
      </div>
    </div>
    <div id="shows" class="flex justify-between" @click="theme_dark" v-else>
      <div>Dark Mode</div>
      <MoonIcon class="w-6 h-6 text-white" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getTheme, setTheme } from "@/util/themeProvider";
import {
  BookmarkIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/vue/outline";
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
// import {} from "@/he"
export default defineComponent({
  components: {
    SunIcon,
    MoonIcon,
    BookmarkIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
  },
  setup(_, { emit }) {
    const lightMode = ref<boolean>(getTheme() === "light");
    const theme_light = () => {
      const theme = "dark";
      if (theme) {
        setTheme(theme);
        lightMode.value = true;
        document.body.setAttribute("theme", theme);
        // document.getElementById("shadow_color").setAttribute("theme", theme);
        // document.getElementById("input").setAttribute("theme", theme);
        emit("theme_light");
      }
    };
    const theme_dark = () => {
      const theme = "light";
      if (theme) {
        setTheme(theme);
        lightMode.value = false;
        document.body.setAttribute("theme", theme);
        // document.getElementById("shadow_color").setAttribute("theme", theme);
        // document.getElementById("input").setAttribute("theme", theme);
        emit("theme_black");
      }
    };
    return { lightMode, theme_light, theme_dark };
  },
});
</script>

<style>
#input[theme="light"] {
  box-shadow: 0px 0px 10px black !important;
  background: #d3d3d300 !important;
}
#input[theme="dark"] {
  background: #d3d3d300 !important;
}
</style>
