<template>
  <div class="grid grid-cols-5 place-items-center lg:hidden">
    <router-link :to="{ path: '/' }" class="p-[.8rem]">
      <HomeIcon class="w-6 h-6 text-black" />
    </router-link>
    <router-link :to="{ path: '/search' }" class="p-[.8rem]">
      <SearchIcon class="w-6 h-6 text-black" />
    </router-link>
    <router-link :to="{ path: '/explore' }" class="p-[.8rem]">
      <GlobeIcon class="w-6 h-6 text-black" />
    </router-link>
    <router-link :to="{ path: '/notification' }" class="p-[.8rem]">
      <BellIcon class="w-6 h-6 text-black" />
    </router-link>
    <router-link :to="{ path: '/message' }" class="p-[.8rem]">
      <MailIcon class="w-6 h-6 text-black" />
    </router-link>
    </div>
    <div id="desktop">
      <div class="lg:grid grid-row-8 place-items-start hidden gap-y-[1.3rem] mb-[1.3rem]">
        <router-link :to="{ path: '/' }" class="p-[0] gap-x-[2rem] font-bold flex">
          <HomeIcon class="w-6 h-6 text-black" />
          <span>Home</span>
        </router-link>
        <router-link :to="{ path: '/search' }" class="p-[0] gap-x-[2rem] font-bold flex">
          <SearchIcon class="w-6 h-6 text-black" />
          <span>Search</span>
        </router-link>
        <router-link :to="{ path: '/explore' }" class="p-[0] gap-x-[2rem] font-bold flex">
          <GlobeIcon class="w-6 h-6 text-black" />
          <span>Explore</span>
        </router-link>
        <router-link :to="{ path: '/notification' }" class="p-[0] gap-x-[2rem] font-bold flex">
          <BellIcon class="w-6 h-6 text-black" />
          <span>Notification</span>
        </router-link>
        <router-link :to="{ path: '/message' }" class="p-[0] gap-x-[2rem] font-bold flex">
          <MailIcon class="w-6 h-6 text-black" />
          <span>Message</span>
        </router-link>
      </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  GlobeIcon,
  MailIcon,
  //   BookmarkIcon
} from "@heroicons/vue/outline";
export default defineComponent({
  components: { HomeIcon, SearchIcon, BellIcon, GlobeIcon, MailIcon },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
