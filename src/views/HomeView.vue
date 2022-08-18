<template>
  <div class="flex flex-col lg:hidden min-h-screen">
    <header class="border-b-2">
      <HeaderView />
    </header>
    <main
      id="mobile"
      class="flex-1 overflow-y-scroll"
      v-observe-visibility="handleToBottom"
    >
      <!-- {{ error }} -->

      <div v-if="!error">
        <div v-for="trend in trends" :key="trend.id">
          {{ trend }}
        </div>
      </div>
      <div v-else>
       <div class="flex justify-center items-center flex-col" style="height: calc(100vh - 110px)">
       <img src="../assets/image/download.png" alt="" class="mb-5 ml-[40px]" srcset="">
       <p class="text-[20px] font-semibold"> {{ error }} </p>
       <small class="font-semibold"> Check your internet connection </small>
       </div>
      </div>
    </main>
    <footer class="border-t-2">
      <footerMobile />
    </footer>
  </div>

  <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4">
        <footerMobile />
        <NavVIew />
      </div>

      <div class="h-screen border-r-2 border-gray-400"></div>

      <div class="w-[55%] p-4">
        <div class="flex items-center justify-between">
          <div class="page_name">Home</div>
          <SparklesIcon class="w-5 h-5" />
        </div>
        <div class="tweet">
          <div class="flex items-center my-4 space-x-1">
            <div
              class="border-2 border-red-500 rounded-full h-10 w-10 bottom-[10px] relative"
            ></div>
            <div class="block">
              <textarea
                name=""
                id=""
                cols="50"
                rows="1"
                class="resize-none p-2 focus:outline-none placeholder:font-[20px]"
                placeholder="what's happening?"
              ></textarea>
              <div class="flex items-center justify-between my-2 ml-5">
                <div class="flex space-x-3">
                  <router-link to="#">
                    <PhotographIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <EmojiHappyIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <ChartSquareBarIcon class="w-5 h-5 rotate-90" />
                  </router-link>
                  <router-link to="#">
                    <GiftIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <CalendarIcon class="w-5 h-5" />
                  </router-link>
                  <router-link to="#">
                    <LocationMarkerIcon class="w-5 h-5" />
                  </router-link>
                </div>
                <router-link to="#">
                  <div class="py-[2px] px-4 bg-blue-700 rounded-[50px]">
                    <p class="font-bold text-white">Tweet</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen border-r-2 border-gray-400"></div>
      <div class="w-[30%] p-4">
        <SearchView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// import footerView from "@/components/Mobile/footerView.vue";
import footerMobile from "@/components/Mobile/footerMobile.vue";
import HeaderView from "../components/Mobile/HeaderView.vue";
import SearchView from "@/components/Desktop/SearchDesk.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue"; // @ is an alias to /src
// import VueObserveVisibilityPlugin from "vue-observe-visibility";
// import db from "@/data/db"
import env from "@/env.js";
import axios from "axios";
import {
  SparklesIcon,
  PhotographIcon,
  GiftIcon,
  ChartSquareBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/vue/outline";
import FooterMobile from "@/components/Mobile/footerMobile.vue";

export default defineComponent({
  props: ["trends", "handleToBottom", "error"],
  name: "HomeView",
  components: {
    footerMobile,
    HeaderView,
    NavVIew,
    SearchView,
    SparklesIcon,
    PhotographIcon,
    GiftIcon,
    ChartSquareBarIcon,
    EmojiHappyIcon,
    CalendarIcon,
    LocationMarkerIcon,
    FooterMobile,
  },
 
});
</script>
