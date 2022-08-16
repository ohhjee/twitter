<template>
  <div
    class="bg-[rgba(0,0,0,.8)] z-20 fixed top-0 left-0 duration-[5000ms] ease-out h-screen w-full"
    @click.self="closeModel"
    id="overlay"
  >
    <div
      class="content-div bg-white w-[70%] h-screen overflow-y-scroll"
      id="sidenav"
    >
      <div class="py-2 mx-4">
        <div
          class="border-2 border-red-500 bg-blue-500 rounded-full h-14 w-14"
        ></div>
        <div class="">
          <div class="flex justify-between items-center">
            <div class="text-[1rem] font-semibold">oluwagbenga</div>
            <div v-if="showIcon">
              <ChevronDownIcon
                class="w-4 h-4 cursor-pointer"
                @click="showsidebar"
              />
            </div>
            <div v-else>
              <ChevronUpIcon
                class="w-4 h-4 cursor-pointer"
                @click="showsidebar"
              />
            </div>
          </div>
          <div class="text-[.8rem]">
            <router-link to="#" class="anchor-tag">@OLUWA__GBENGA</router-link>
          </div>
          <div class="followers">
            <div class="flex text-[.9rem] space-x-1 mt-2">
              <div class="following">
                <span class="font-bold">800</span> Following
              </div>
              <div class="follower">
                <span class="font-bold">80</span> Followers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t-2"></div>
      <div v-show="showIcon">
        <div class="border-t-2 mt-2"></div>
        <div class="m-4">
          <FontIcons class="text-red-500" />
        </div>
        <div class="border-t-2"></div>
        <div class="m-4">
          <router-link to="#" class="flex text-red-500 items-center">
            <ChevronDoubleUpIcon class="w-4 h-4 rotate-[45deg] mr-4" />
            <span class="text-[1.rem]">Twitter for Professional</span>
          </router-link>
        </div>
        <div class="border-t-2"></div>
      </div>

      <div id="Help_Setting" class="space-y-4 m-4">
        <div class="w-full">
          <router-link to="/Setting" class="w-full border-2">
            Setting and Privacy
          </router-link>
        </div>
        <div>
          <router-link to="#" class="text-red-500">Help Center</router-link>
        </div>
      </div>
      <!-- <div id="app-cover">
        <div class="row">
          <div class="toggle-button-cover">
            <div class="button-cover">
              <div class="button r" id="button-3">
                <input type="checkbox" class="checkbox" @click="theme_color" />
                <div class="knobs"></div>
                <div class="layer"></div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  ChevronDownIcon,
  ChevronDoubleUpIcon,
  ChevronUpIcon,
} from "@heroicons/vue/outline";
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
import FontIcons from "./fontIcons.vue";
import { getTheme, setTheme } from "@/util/themeProvider";

export default defineComponent({
  props: ["showModel"],
  components: {
    ChevronDownIcon,
    FontIcons,
    ChevronDoubleUpIcon,
    ChevronUpIcon,
    SunIcon,
    MoonIcon,
  },
  setup() {
    const showIcon = ref<boolean>(true);
    const lightMode = ref<boolean>(getTheme() === "light");
    // const iconToggle = ref<boolean>(true);
    const theme_light = () => {
      const theme = "dark";
      if (theme) {
        setTheme(theme);
        lightMode.value = true;
        document.body.setAttribute("theme", theme);
        document.getElementById("sidenav").setAttribute("theme", theme);
        document.getElementById("overlay").setAttribute("theme", theme);
        document.getElementById("shows").setAttribute("theme", theme);
      }
    };
    const theme_dark = () => {
      const theme = "light";
      if (theme) {
        setTheme(theme);
        lightMode.value = false;
        document.body.setAttribute("theme", theme);
        document.getElementById("sidenav").setAttribute("theme", theme);
        document.getElementById("overlay").setAttribute("theme", theme);
        document.getElementById("shows").setAttribute("theme", theme);
      }
    };
    return { showIcon, lightMode, theme_light, theme_dark };
  },
  methods: {
    closeModel() {
      this.$emit("closeNav");
    },
    showsidebar() {
      this.showIcon = !this.showIcon;
    },
  },
});
</script>

<style>
body[theme="light"] {
  background-color: white;
  color: black;
  transition: 100ms ease-in-out;
}
body[theme="dark"] {
  background-color: black;
  color: white;
  transition: 100ms ease-in-out;
}
#sidenav[theme="dark"] {
  background-color: black;
  transition: 500ms ease-in-out;
  color: white;
}
#sidenav[theme="light"] {
  transition: 500ms ease-in-out;
  background-color: white;
  color: black;
}
#overlay[theme="dark"] {
  background-color: rgb(255 251 251 / 72%);
  transition: 500ms ease-in-out;
  color: white;
}
#overlay[theme="light"] {
  background-color: rgba(0, 0, 0, 0.8);
  transition: 500ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
#shows[theme="dark"]{
  transition: 500ms ease-in-out;

}#shows[theme="light"]{
  transition: 500ms ease-in-out;

}

/* CSS rules are kept repetitive so that you can get CSS rules for each button easily :) */

* {
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

*:focus {
  outline: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-color: #f1f9f9;
}

#app-cover {
  display: table;
  /* width: 600px;*/
  /*margin: 80px auto; */
  counter-reset: button-counter;
}

.toggle-button-cover {
  display: table-cell;
  position: relative;
  /*  width: 200px;
  height: 140px; */
  box-sizing: border-box;
}

.button-cover {
  /* height: 100px; */
  margin: 20px;
  background-color: blue;
  /*box-shadow: 0 10px 20px -8px #c5d6d6;*/
  border-radius: 4px;
}

.button-cover:before {
  counter-increment: button-counter;
  content: counter(button-counter);
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d7e3e3;
  font-size: 12px;
  line-height: 1;
  padding: 5px;
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}

/* Button 3 */
#button-3 .knobs:before {
  content: "YES";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 27px;
  height: 27px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

#button-3 .checkbox:active + .knobs:before {
  width: 46px;
  border-radius: 100px;
}

#button-3 .checkbox:checked:active + .knobs:before {
  margin-left: -26px;
}

#button-3 .checkbox:checked + .knobs:before {
  content: "NO";
  left: 42px;
  background-color: white;
  color: black;
  display: flex;
  justify-items: center;
  align-items: center;
}

#button-3 .checkbox:checked ~ .layer {
  background-color: black;
}
</style>
