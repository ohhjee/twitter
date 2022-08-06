<template>
  <div
    class="bg-[rgba(0,0,0,.8)] z-20 fixed top-0 left-0 duration-[5000ms] ease-out h-screen w-full"
    @click.self="closeModel" 
  >
    <div class="content-div bg-white w-[70%] h-screen overflow-y-scroll">
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
import FontIcons from "./fontIcons.vue";

export default defineComponent({
  props: ["showModel", "isDark"],
  components: {
    ChevronDownIcon,
    FontIcons,
    ChevronDoubleUpIcon,
    ChevronUpIcon,
  },
  setup() {
    const showIcon = ref<boolean>(true);
    return { showIcon };
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

<style scoped></style>
