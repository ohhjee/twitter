<template>
  <div class="lg:hidden flex flex-col min-h-screen">
    <header class="border-b-2">
      <HeaderView />
    </header>
    <main id="mobile" class="overflow-scroll flex-1">
      <div v-for="trends in trend" :key="trends">
        {{ trends.text }}
      </div>
    </main>
    <footer class="border-t-2">
      <footerView />
    </footer>
  </div>
  <div class="container mx-auto">
    <div class="hidden lg:flex">
      <div class="w-[30%] p-4"><NavVIew /></div>
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[55%] p-4">
        <div class="flex justify-between items-center">
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
              <div class="flex items-center justify-between ml-5 my-2">
                <div class="flex space-x-3">
                  <route-link to="#">
                    <PhotographIcon class="w-5 h-5" />
                  </route-link>
                  <route-link to="#">
                    <EmojiHappyIcon class="w-5 h-5" />
                  </route-link>
                  <route-link to="#">
                    <ChartSquareBarIcon class="w-5 h-5 rotate-90" />
                  </route-link>
                  <route-link to="#">
                    <GiftIcon class="w-5 h-5" />
                  </route-link>
                  <route-link to="#">
                    <CalendarIcon class="w-5 h-5" />
                  </route-link>
                  <route-link to="#">
                    <LocationMarkerIcon class="w-5 h-5" />
                  </route-link>
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
      <div class="border-r-2 border-gray-400 h-screen"></div>
      <div class="w-[30%] p-4">
        <SearchView />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import footerView from "@/components/Mobile/footerView.vue";
import HeaderView from "../components/Mobile/HeaderView.vue";
import NavVIew from "@/components/Desktop/NavVIew.vue"; // @ is an alias to /src
import SearchView from "@/components/Desktop/SearchDesk.vue";
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

export default defineComponent({
  name: "HomeView",
  components: {
    footerView,
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
  },
  setup() {
    const trend = ref<[]>([]);
    onMounted(() => {
      const config = {
        headers: {
          "X-RapidAPI-Key": `${env.API_KEY}`,
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };
      try {
        axios
          .get(
            `${env.BASE_URL}user/tweets?username=elonmusk&?limit=40`,
            config
          )
          .then((res) => res.data.tweet_id);
        // .then((res) => console.log(res.data.results));
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    });
    // const sidebar = ref<boolean>(false);

    const getTrend = async () => {
      const config = {
        headers: {
          "X-RapidAPI-Key": `${env.API_KEY}`,
          "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
        },
      };
      try {
        const res = await axios(
          `${env.BASE_URL}user/tweets?username=omarmhaimdat&?limit=40`,
          config
        );
        trend.value = res.data;
      } catch (e) {
        console.log(e);
      }
    };

    setInterval(() => {
      getTrend();
    }, 1500);

    return { trend };
  },

  // methods:{
  //   sidebar(){
  //     console.log("hey");

  //   }
  // }
});
</script>
